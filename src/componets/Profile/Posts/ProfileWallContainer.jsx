import { connect } from "react-redux";
import { onAddPost } from "../../../redux/profileReducer";
import ProfileWall from "./ProfileWall";

const mapStateToProps = (state) => {

  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPostText,
    profileInfo: state.profilePage.profile
  };
};


const ProfileWallContainer = connect(mapStateToProps, {
  onAddPost
})(ProfileWall);

export default ProfileWallContainer;
