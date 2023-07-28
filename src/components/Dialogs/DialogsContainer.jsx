import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {};
};

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Dialogs);
