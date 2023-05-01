//         <ProfileStatus status={props.profileInfo.aboutMe} />
import { Col, Row, Button } from "antd";
import {
  FacebookFilled,
  ChromeFilled,
  BehanceSquareFilled,
  TwitterSquareFilled,
  InstagramFilled,
  YoutubeFilled,
  GithubFilled,
  ScheduleFilled,
} from "@ant-design/icons";
import React from "react";

import PostsItem from "./PostsItem";

const ProfileWall = (props) => {
  let postsElement = props.posts.map((p) => (
    <PostsItem profile={props.profileInfo} message={p.message} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost();
  };
  let onPostChange = (e) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    console.log(e);
  };

  return (
    <Row>
      <Col span={8}>
        <div className="profile__link">
          <FacebookFilled style={{ fontSize: "25px" }} />
          <span> Facebook:</span>
          <span>{props.profileInfo.contacts.facebook} </span>
        </div>
        <div className="profile__link">
          <ChromeFilled style={{ fontSize: "25px" }} />
          <span> Chrome:</span>
          <span>{props.profileInfo.contacts.website} </span>
        </div>
        <div className="profile__link">
          <BehanceSquareFilled style={{ fontSize: "25px" }} />
          <span> VK:</span>
          <span>{props.profileInfo.contacts.vk} </span>
        </div>
        <div className="profile__link">
          <TwitterSquareFilled style={{ fontSize: "25px" }} />
          <span> Twitter:</span>
          <span>{props.profileInfo.contacts.twitter} </span>
        </div>
        <div className="profile__link">
          <InstagramFilled style={{ fontSize: "25px" }} />
          <span> Instagram:</span>
          <span>{props.profileInfo.contacts.instagram} </span>
        </div>
        <div className="profile__link">
          <YoutubeFilled style={{ fontSize: "25px" }} />
          <span> Youtube:</span>
          <span>{props.profileInfo.contacts.youtube} </span>
        </div>
        <div className="profile__link">
          <GithubFilled style={{ fontSize: "25px" }} />
          <span> Github:</span>
          <span>{props.profileInfo.contacts.github} </span>
        </div>
        <div className="profile__link">
          <ScheduleFilled style={{fontSize: '25px'}} />
          <span> ScheduleFilled</span>
          <span>{props.profileInfo.contacts.mainLink} </span>
        </div>
      </Col>
      <Col span={16}>
        <Row>
          <Col span={16}>
            <textarea
              value={props.newPost}
              cols="30"
              onChange={onPostChange}
              placeholder="Что у вас нового?"
              ref={newPostElement}
            />
          </Col>
          <Col span={8}>
            <Button onClick={onAddPost}>Отправить</Button>
          </Col>
        </Row>
        {postsElement}
      </Col>
    </Row>
  );
};

export default ProfileWall;
