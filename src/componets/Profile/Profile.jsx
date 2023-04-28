import back from "../../content/back.jpeg";
import Preloader from "../UI/Preloader/Preloader";
import ProfileWallContainer from "./Posts/ProfileWallContainer";

import "./profile.css";
const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="profile">
      <img className="profile__background" src={back} />
      <div className="container">
        <div className="profile__grid">
          <div className="profile__about">
            <img
              src={props.profile.photos.large}
              alt=""
              className="profile__avatar"
            />
            <div className="profile__info">
              <div className="profile__nameid">{props.profile.userId}</div>
            </div>
          </div>
          <ProfileWallContainer props={props.profile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
