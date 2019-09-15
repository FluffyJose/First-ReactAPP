import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Kolya'},
        {id: 5, name: 'Tanya'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine!'}
    ]
    let dialogsElements = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElements = messages.map(messages => <Message message={messages.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;