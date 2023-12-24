import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
function App1(props) {
  const [count, setCount] = useState(0)
 console.log('props for app1 is',props)
  const count1=useSelector((store)=>store.IncrementDecrement)
  const dispath=useDispatch();
  console.log('count1 is ',count1)
  return (
    <>
    <div style={{'margin':'100px 20px'}}>
      <Button variant="danger"  onClick={()=>dispath({type:'DEC',val:count1})}> Decrement</Button> {''}
      <input value={count1} onChange={(e)=>dispath({type:'CHANGE',val:e.target.value})}></input> {''}
      <Button  variant="success" onClick={()=>dispath({type:'INC',val:count1})}>Increment</Button>
      </div>
    </>
  )
}

export default App1
