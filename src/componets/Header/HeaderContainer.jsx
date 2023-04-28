import React from "react";
import Header from "./Header";
import {getAuth} from '../../api/api'
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    debugger
    getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        
        let { id, email, login } = response.data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setUserData })(HeaderContainer);
