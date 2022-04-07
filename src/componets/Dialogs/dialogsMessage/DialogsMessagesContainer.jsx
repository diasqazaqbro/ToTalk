import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/dialogsReducer'
import DialogsMessages from "./DialogsMessages";

const DialogsMessagesContainer = (props) => {
   let state = props.store.getState()


   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator())
   }

   let onChangeMessage = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text))
   }

   return (<DialogsMessages message={state.messagesPage.message} newMessage={state.messagesPage.newMessageText}
      onAddMessage={addMessage} updateNewMessageText={onChangeMessage} />)
}

export default DialogsMessagesContainer;