import { Navigate } from "react-router-dom";
import DialogListContainer from "./dialogList/DialogsListContainer";
import DialogsMessagesContainer from "./dialogsMessage/DialogsMessagesContainer";
const Dialogs = (props) => {
   if (props.isAuth == false) return <Navigate to={'/login'}/>
  return (
    <div className="dialogs">
      <DialogListContainer />
      <DialogsMessagesContainer />
    </div>
  );
};

export default Dialogs;
