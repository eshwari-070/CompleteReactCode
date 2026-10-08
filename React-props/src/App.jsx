import React, { useState } from 'react'
import Greeting from './assets/Greeting'

export default function App() {
  let [name, setName] = useState("Aishwarya")
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  const update = () => {
    setName("Chandan");
  };
  const Inc = () => {
    setCount(count + 1);
  };
  const Dec = () => {
    setCount(count - 1);
  };
  const Zero = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick={update}>Change Name</button>
      <h1>The count value is {count}</h1>
<br></br>
      <button onClick={Inc}>count is {count} - Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={Zero}>Reset</button>
    </div>
  )
}
