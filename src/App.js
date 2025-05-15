import React, { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
          defaultValue="Sort"
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]}
        />
      </div>
      {posts.length 
      ?
      <PostList remove={removePost} posts={posts} title='Posts list' />
      :
      <h1 style={{textAlign: 'center'}}>
        No posts
      </h1>
      }
    </div>
  );
}

export default App;