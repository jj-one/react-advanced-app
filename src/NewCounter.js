import React, { useState } from 'react'

export default function NewCounter() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(oldState => oldState + 1);
  };

  return (
    <div>
      <p>You have clicked {count} times</p>

      <button onClick={increase}>Click me</button>
    </div>
  )
}
