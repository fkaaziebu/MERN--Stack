import React from "react";

function PostList({ post }) {
  return (
    <div className="d-flex">
      {post.map((msg) => {
        return <div key={msg} className="m-2 p-3 display-4 border border-3 rounded">{msg}</div>;
      })}
    </div>
  );
}

export default PostList;

// {post.map((msg) => {
//   return <div key={msg}>{msg}</div>;
// })}
