import React, { useState } from "react";
import Post from "./Post";
import PostList from "./PostList";


function App() {
  const [post, setPost] = useState([]);
  console.log(post);

  return (
    <div className="App">
      
      {/* 
      1. Post field
      2. Post Listing
      3. Comment field
      4. Comment Listing
      */}

      <Post post={post} setPost={setPost} />
      <PostList post={post} />     
    </div>
  );
}

export default App;
