import DialogListContainer from "./dialogList/DialogsListContainer";
import DialogsMessagesContainer from "./dialogsMessage/DialogsMessagesContainer";
const Dialogs = (props) => {

alert(props.isAuth)
   return (
      <div className="dialogs">
         <DialogListContainer />
         <DialogsMessagesContainer />
      </div>
   )
}

export default Dialogs;