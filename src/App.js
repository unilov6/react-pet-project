import React, { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])
  return (
    <div className="App">
      <form>
        <input 
          type="text"
          placeholder="Post title"
        />
        <input 
          type="text"
          placeholder="Post description"
        />
        <button>Create post</button>
      </form>
      <PostList posts={posts} title="Post list" />
    </div>
  );
}

export default App;
