import Dialog from "./Dialog"
const DialogList = (props) => {
   let dialogElement = props.dialog.map(n => <Dialog name={n.name} key={n.id} id={n.id} />)
   return (
      <div className="dialogs__list">
         {dialogElement}
      </div>
   )
}

export default DialogList