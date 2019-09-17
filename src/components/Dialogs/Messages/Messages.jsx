import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div>
                <textarea name="Type your message here:" cols="30" rows="1"></textarea>
            </div>
        </div>
    )
}

export default Message;