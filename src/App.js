import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('input text')

  const increment = () => {
    setLikes(likes + 1)
  }

  const decrement = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>

      <h1>{value}</h1>
      <input 
        type="text" 
        value={value} 
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
