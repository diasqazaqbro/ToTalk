import { connect } from "react-redux";
import {
  updateNewMessageText,
  onAddMessage,
} from "../../../redux/dialogsReducer";
import DialogsMessages from "./DialogsMessages";

let mapStateToProps = (state) => {
  return {
    message: state.messagesPage.message,
    newMessage: state.messagesPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
let DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  onAddMessage,
})(DialogsMessages);

export default DialogsContainer;
