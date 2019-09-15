import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div><a href="#">Documentation  </a></div>
            <div><a href="#">About  </a></div>
            <div><a href="#">Contacts  </a></div>            
        </footer>
    )
}

export default Footer;