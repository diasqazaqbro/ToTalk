import DialogListContainer from "./dialogList/DialogsListContainer";
import DialogsMessagesContainer from "./dialogsMessage/DialogsMessagesContainer";
const Dialogs = (props) => {
   return (
      <div className="dialogs">
         <DialogListContainer store={props.store} />
         <DialogsMessagesContainer store={props.store} />
      </div>
   )
}

export default Dialogs;