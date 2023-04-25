import React from "react";
import axios from "axios";
import s from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={s.main}>
        <div className={s.count}>
          Все пользователи: <span className={s.counter}>228</span>
        </div>
        <div className={s.list}>
          {this.props.users.map((u) => (
            <div className={s.item}>
              <div className={s.card}>
                {u.photos.small ? (
                  <img className={s.img} src={u.photos.small} alt="" />
                ) : (
                  <img
                    className={s.img}
                    src="https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13"
                    alt=""
                  />
                )}

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
                      this.props.follow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}
export default Users;
