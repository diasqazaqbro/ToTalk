import back from "../../content/back.jpeg";
import Preloader from "../UI/Preloader/Preloader";
import ProfileWallContainer from "./Posts/ProfileWallContainer";

import "./profile.css";
const Profile = (props) => {
  const photos = () => {
    if (props.profile.photos.large === null) {
      return (
        <img
          src={'https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13'}
          alt=""
          className="profile__avatar"
        />
      );
    } else {
      return (
        <img
          src={props.profile.photos.large}
          alt=""
          className="profile__avatar"
        />
      );
    }
  };
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="profile">
      <img className="profile__background" src={back} />
      <div className="container">
        <div className="profile__grid">
          <div className="profile__about">
            {photos()}
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
