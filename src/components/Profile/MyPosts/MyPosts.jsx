import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <input ref={newPostElement}/>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
