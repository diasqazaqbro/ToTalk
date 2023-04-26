import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.main}>
      <div className={s.count}>
        Все пользователи: <span className={s.counter}>{props.totalCount}</span>
      </div>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p && s.selectedPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={s.list}>
        {props.users.map((u) => (
          <div className={s.item}>
            <div className={s.card}>
              <NavLink to={"/profile/" + u.id}>
                {u.photos.small ? (
                  <img className={s.img} src={u.photos.small} alt="" />
                ) : (
                  <img
                    className={s.img}
                    src="https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13"
                    alt=""
                  />
                )}
              </NavLink>

              <div className={s.profile}>
                <div className={s.name}>{u.name}</div>
                <div className={s.status}>
                  {u.status ? (
                    <div>{u.status}</div>
                  ) : (
                    <div className="">no status</div>
                  )}
                </div>
              </div>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "4a415add-87af-4e15-8373-1f7a1706053b",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "4a415add-87af-4e15-8373-1f7a1706053b",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
