import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthThunkCreator } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthThunkCreator();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { getAuthThunkCreator })(
  HeaderContainer
);
