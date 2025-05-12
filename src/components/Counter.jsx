import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}

export default Counter