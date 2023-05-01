import { Col, Row, Button } from "antd";

import React from "react";

import PostsItem from "./PostsItem";
import ProfileLink from "./ProfileLink";

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
      <ProfileLink contacts={props.profileInfo.contacts} />
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
