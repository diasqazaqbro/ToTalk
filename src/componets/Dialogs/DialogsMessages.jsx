import DialogItem from "./DialogItem";

const DialogsMessages = (props) => {
   let messageElement = props.message.map(m => <DialogItem message={m.message} />)
   return (
      <div className="dialog__messages">
         {messageElement}
      </div>
   )
}

export default DialogsMessages;