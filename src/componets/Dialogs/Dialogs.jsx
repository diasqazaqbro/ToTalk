import DialogList from "./DialogsList";
import DialogsMessages from "./DialogsMessages";
const Dialogs = (props) => {
   return (
      <div className="dialogs">
         <DialogList dialog={props.state.dialog} />
         <DialogsMessages message={props.state.message} />
      </div>
   )
}

export default Dialogs;