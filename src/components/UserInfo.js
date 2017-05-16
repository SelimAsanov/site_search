import React from 'react'
import Posts from './Posts'

const UserInfo = ({ match, data }) => {
  const userId = Number(match.params.id)
  const user = data.users.filter(user => user.id === userId)
  const userName = user[0].name
  const usersPosts = data.posts.filter(post => post.userId === userId)
  return (
    <Posts userName={userName} usersPosts={usersPosts} />
  )
}

export default UserInfo
