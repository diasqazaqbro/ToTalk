import { NavLink } from "react-router-dom";
import './dialog.css'
const Dialog = (props) => {
   let id = '' + props.id
   return (
      <div className="dialog">
         <NavLink to={id}>
            {props.name}
         </NavLink>
      </div >
   )
}

export default Dialog;