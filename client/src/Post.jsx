import React, { useState } from "react";

function Post({ post, setPost }) {
  const [msg, setMsg] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPost([...post, msg]);
        setMsg("");
      }}
    >
      <div className="mb-3">
        <label for="post" className="form-label fs-1">
          Post
        </label>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          id="post"
          name="post"
          className="form-control fs-2 p-3"
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary p-3 fs-3">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Post;
