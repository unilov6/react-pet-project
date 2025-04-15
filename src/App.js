import React, { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [selectedSort, setSelectedSort] = useState("")
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    console.log(sort)
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]}
      />
      {posts.length 
      ?
      <PostList remove={removePost} posts={posts} title="Post list" />
      :
      <h1 style={{textAlign: "center"}}>
        No posts
      </h1>}
      
    </div>
  );
}

export default App;
