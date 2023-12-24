import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
function App1(props) {
  const [count, setCount] = useState(0)
 console.log('props for app1 is',props)
  const count1=useSelector((store)=>store.IncrementDecrement)
  const dispath=useDispatch();
  console.log('count1 is ',count1)
  return (
    <>
      <button onClick={()=>dispath({type:'DEC',val:count1})}> -</button>{count1} 
      <button onClick={()=>dispath({type:'INC',val:count1})}>+</button>
    </>
  )
}

export default App1
