import React, { useState } from "react";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList"
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

   async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    setPosts(json)
   }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyButton onClick={getPosts}>Get posts</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list" />
    </div>
  );
}

export default App;
