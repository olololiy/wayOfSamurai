import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";

function Dialogs(props){

    let dialogElem = props.dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>);
    //плохо понимаю как работает функция, нужно прописать пошагово
    let messageElem = props.messages.map( m => <Message message = {m.message}/>)
    return(
        <div>
            <div>
                {dialogElem}
            </div>
            <div>
                {messageElem}
            </div>
        </div>
    )
}






export default Dialogs;