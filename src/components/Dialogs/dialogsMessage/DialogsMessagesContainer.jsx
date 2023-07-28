import { connect } from "react-redux";
import { onAddMessage } from "../../../redux/dialogsReducer";
import DialogsMessages from "./DialogsMessages";

let mapStateToProps = (state) => {
  return {
    message: state.messagesPage.message,
    newMessage: state.messagesPage.newMessageText,
  };
};

let DialogsMessageContainer = connect(mapStateToProps, {
  onAddMessage,
})(DialogsMessages);

export default DialogsMessageContainer;
