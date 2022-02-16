import {NavLink} from "react-router-dom";

function DialogItem(props){
    let path = "/dialogs/" + props.id;

    return(
        <div>
           <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;