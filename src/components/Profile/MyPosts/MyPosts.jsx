import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'How are you?', likesCount: 12},
    {id: 2, message: 'its my first post!', likesCount: 5}
  ]
  let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <input/>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
