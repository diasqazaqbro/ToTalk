import React from "react";
import PostsItem from "./PostsItem";
const ProfileWall = (props) => {
  let postsElement = props.posts.map((p) => <PostsItem message={p.message} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className="profile__wall">
      <div className="profile__stat">
        <div className="profile__name">{props.profileInfo.fullName}</div>
        <div className="profile__status">
          WebDeveloper/FrontEnd/BackEnd/React
        </div>
      </div>
      <div className="profile__area">
        <textarea
          value={props.newPost}
          cols="61"
          rows="3"
          wrap="soft"
          onChange={onPostChange}
          maxLength={140}
          accessKey="tab"
          placeholder="Что у вас нового?"
          ref={newPostElement}
        />
        <button onClick={onAddPost}>Кнопка</button>
      </div>
      <div className="profile__posts">{postsElement}</div>
    </div>
  );
};

export default ProfileWall;
