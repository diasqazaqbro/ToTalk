import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  putStatusThunkCreator,
  savePhotoThunkCreator
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        {...this.props}
        status={this.props.status}
        putStatus={this.props.putStatusThunkCreator}
        savePhotoThunkCreator={this.props.savePhotoThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    putStatusThunkCreator,
    savePhotoThunkCreator
  }),
  withAuthRedirect
)(withRouter(ProfileContainer));
