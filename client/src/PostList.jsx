import React from 'react'

function PostList({ post }) {
  return (
    <div>
        {post.map((msg) => {
            return (
                <div key={msg}>{msg}</div>
            )
        })}
    </div>
  )
}

export default PostList
