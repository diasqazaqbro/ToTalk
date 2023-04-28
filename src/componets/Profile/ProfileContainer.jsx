import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProfileThunkCreator } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 23620;
    }
    this.props.getProfileThunkCreator(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
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
export default compose(connect(mapStateToProps, { getProfileThunkCreator }),withAuthRedirect)(
  withRouter(ProfileContainer)
);
