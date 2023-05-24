import React, { useState } from "react";
import Post from "./Post";
import PostList from "./PostList";

function App() {
  const [post, setPost] = useState([]);
  console.log(post);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      {/* 
      1. Post field
      2. Post Listing
      3. Comment field
      4. Comment Listing
      */}

      <Post post={post} setPost={setPost} />

      <div className="w-100 bg-dark p-1"/>
      
      <PostList post={post} />
    </div>
  );
}

export default App;
