import DialogListContainer from "./dialogList/DialogsListContainer";
import DialogsMessagesContainer from "./dialogsMessage/DialogsMessagesContainer";
const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <DialogListContainer />
      <DialogsMessagesContainer />
    </div>
  );
};

export default Dialogs;
