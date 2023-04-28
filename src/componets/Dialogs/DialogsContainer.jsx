import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};


let DialogsContainer = connect(mapStateToProps, {

})(Dialogs);

export default DialogsContainer;
