import React from 'react'

const Posts = ({ userName, usersPosts }) => (
  <div>
    <h2 className="posts userName">{userName}</h2>
    <ul className="posts-list">
      {usersPosts.map(post =>
        <li className="post" key={post.id}>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </li>
      )}
    </ul>
  </div>
)

export default Posts
