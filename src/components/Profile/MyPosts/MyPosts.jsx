import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <p>My posts</p>
      <div>
        <input/>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='15'/>
        <Post message="it's my first post" likesCount='23'/>
      </div>
    </div>
  )
}

export default MyPosts;
