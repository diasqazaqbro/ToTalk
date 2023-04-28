import { connect } from "react-redux";
import { onAddPost, updateNewPostText } from "../../../redux/profileReducer";
import ProfileWall from "./ProfileWall";

const mapStateToProps = (state) => {
  debugger

  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPostText,
    profileInfo: state.profilePage.profile
  };
};


const ProfileWallContainer = connect(mapStateToProps, {
  onAddPost,
  updateNewPostText,
})(ProfileWall);

export default ProfileWallContainer;
