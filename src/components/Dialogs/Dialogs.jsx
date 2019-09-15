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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Frend1' id='1'/>
                <DialogItem name='Frend2' id='2'/>
                <DialogItem name='Frend3' id='3'/>
                <DialogItem name='Frend4' id='4'/>
                <DialogItem name='Frend5' id='5'/>
                <DialogItem name='Frend6' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='I am fine!'/>
            </div>
        </div>
    )
}

export default Dialogs;