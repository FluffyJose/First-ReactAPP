import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <section>
          <h3>Friends</h3>
          <div>
            <img src="https://sophosnews.files.wordpress.com/2014/04/anonymous-250.jpg?w=250" alt="Vasya"/>
            Vasya
          </div>
          <div>
            <img src="https://sophosnews.files.wordpress.com/2014/04/anonymous-250.jpg?w=250" alt="Petya"/>
            Petya
          </div>
          <div>
            <img src="https://sophosnews.files.wordpress.com/2014/04/anonymous-250.jpg?w=250" alt="Misha"/>
            Misha
          </div>
        </section>
    </nav>
  )
}

export default NavBar;