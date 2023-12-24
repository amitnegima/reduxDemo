import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleDecrement=()=>{
    console.log(this);
    if(count>=1)
     setCount((prev)=>prev-1);
  }
  const handleIncrement=()=>{
    console.log(this);
     setCount((prev)=>prev+1);
  }
  return (
    <>
      <button onClick={handleDecrement}> -</button>{count} <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default App
