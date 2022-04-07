import DialogList from "./DialogsList"
const DialogListContainer = (props) => {

   return (<DialogList dialog={props.store.getState().messagesPage.dialog} />)
}

export default DialogListContainer