import { Col, Row } from "antd";
import { Field, reduxForm } from "redux-form";
import React from "react";
import PostsItem from "./PostsItem";
import ProfileLink from "./ProfileLink";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../UI/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const PostForm = (props) => {
  return (
    <Row>
      <form onSubmit={props.handleSubmit}>
        <Col span={16}>
          <Field
            validate={[requiredField, maxLength10]}
            component={Textarea}
            placeholder="Что у вас нового?"
            name={"postBody"}
          />
        </Col>
        <Col span={8}>
          <button>Отправить</button>
        </Col>
      </form>
    </Row>
  );
};

const PostReduxForm = reduxForm({ form: "posts" })(PostForm);

const ProfileWall = (props) => {
  let postsElement = props.posts.map((p) => (
    <PostsItem profile={props.profileInfo} message={p.message} />
  ));

  let onAddPost = (values) => {
    props.onAddPost(values.postBody);
  };
  return (
    <Row>
      <ProfileLink contacts={props.profileInfo.contacts} />
      <Col span={16}>
        <PostReduxForm onSubmit={onAddPost} />
        {postsElement}
      </Col>
    </Row>
  );
};

export default ProfileWall;
