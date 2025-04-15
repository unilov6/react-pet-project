import React, { useState, useMemo } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('worked func sorted posts')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search posts..."
      />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]}
      />
      {sortedAndSearchedPosts.length 
      ?
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list" />
      :
      <h1 style={{textAlign: "center"}}>
        No posts
      </h1>}
      
    </div>
  );
}

export default App;
