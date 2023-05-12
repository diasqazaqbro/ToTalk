import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  putStatusThunkCreator,
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        putStatus={this.props.putStatusThunkCreator}
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
  }),
  withAuthRedirect
)(withRouter(ProfileContainer));
