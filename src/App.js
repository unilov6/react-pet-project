import React, { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text" 
          placeholder="Post name"
          value={title}
          onChange={e => setTitle(e.target.value)} 
        />
        <MyInput 
          type="text" 
          placeholder="Post description"
          value={body}
          onChange={e => setBody(e.target.value)} 
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='Posts list' />
    </div>
  );
}

export default App;