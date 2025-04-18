import React, { useEffect, useState } from "react";
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList"
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./UI/loader/MyLoader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

   useEffect(() => {
    fetchPosts()
   }, [])

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostLoading 
        ? <div style={{display:'flex', justifyContent: 'center', marginTop: '30px'}}><MyLoader /></div> 
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list" />
      }
    </div>
  );
}

export default App;
