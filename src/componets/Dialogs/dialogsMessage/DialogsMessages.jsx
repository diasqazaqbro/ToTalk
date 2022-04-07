import DialogItem from "./DialogItem";
import React from "react";

const DialogsMessages = (props) => {
   let newMessageElement = React.createRef()
   let messageElement = props.message.map(m => <DialogItem message={m.message} />)

   let addMessage = () => {
      props.onAddMessage()
   }

   let onChangeMessage = () => {
      let text = newMessageElement.current.value
      props.updateNewMessageText(text)
   }

   return (
      <div className="dialog__messages">
         {messageElement}
         <textarea value={props.newMessage} onChange={onChangeMessage} ref={newMessageElement} name="" id="" cols="30" rows="10" />
         <button onClick={addMessage}>Отправить</button>
      </div>
   )
}

export default DialogsMessages;