import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,decrease,reset } from './counterSlice'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increase())}>+</button>
    <button onClick={()=>dispatch(decrease())}>-</button>
    <button onClick={()=>dispatch(reset())}>0</button>
    </>
  )
}

export default App