import { connect } from "react-redux"
import DialogList from "./DialogsList"

let mapStateToProps = (state) => {
   return {
      dialog: state.messagesPage.dialog,
   }
}

let DialogListContainer = connect(mapStateToProps)(DialogList)

export default DialogListContainer