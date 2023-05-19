import React, { useState } from 'react'

function Post({ post, setPost }) {
    const [msg, setMsg] = useState("");
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        setPost([...post, msg])
        setMsg("")
    }}>
        <div>
            <label for="post">Post</label>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} id="post" name='post' />
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Post
