import Preloader from "../UI/Preloader/Preloader";
import ProfileWallContainer from "./Posts/ProfileWallContainer";
import ProfileStatus from "./Posts/ProfileStatus";
import "./profile.sass";
import { Col, Row, Image } from "antd";

const Profile = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhotoThunkCreator(e.target.files[0])
    }
  }
  const photos = () => {
    if (props.profile.photos.large === null) {
      return (
        <div>
          <Image
            src={
              "https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13"
            }
          />
          {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        </div>
      );
    } else {
      return (
        <di v>
          <Image width={350} src={props.profile.photos.large} />
          {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        </di>
      );
    }
  };
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="profile">
      <Row>
        <Col span={8}>{photos()}</Col>
        <Col span={16}>
          <div className="profile__name">{props.profile.fullName}</div>
          <ProfileStatus putStatus={props.putStatus} status={props.status} />
        </Col>
      </Row>
      <ProfileWallContainer props={props.profile} />
    </div>
  );
};

export default Profile;
