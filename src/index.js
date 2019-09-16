import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'How are you?', likesCount: 12},
    {id: 2, message: 'its my first post!', likesCount: 5}
]
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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
