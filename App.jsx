import React,{useReducer} from 'react'

function App() {
  const[state,dispatch]=useReducer(reducer,{count:0})

  return (
    <>
    <h3>{state.count}</h3>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}

export default App

function reducer(state,action){
     switch(action.type){
      case 'increment':return {count: state.count+1}
      case 'decrement':return {count: state.count-1}
      case 'reset': return {count: 0}
      default :return state
     }
}