import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='http://hdwpro.com/wp-content/uploads/2015/12/Widescreen-Image.jpg' />
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;
