import { connect } from "react-redux";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/dialogsReducer'
import DialogsMessages from "./DialogsMessages";

let mapStateToProps = (state) => {
   return {
      message: state.messagesPage.message,
      newMessage: state.messagesPage.newMessageText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      onAddMessage: () => {
         dispatch(addMessageActionCreator())
      }
   }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsMessages)

export default DialogsContainer;