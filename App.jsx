import React,{useReducer,useMemo,useState,useCallback} from 'react'

// function App() {
//   const[state,dispatch]=useReducer(reducer,{count:0})

//   return (
//     <>
//     <h3>{state.count}</h3>
//     <button onClick={()=>dispatch({type:'increment'})}>+</button>
//     <button onClick={()=>dispatch({type:"decrement"})}>-</button>
//     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//     </>
//   )
// }

// export default App

// function reducer(state,action){
//      switch(action.type){
//       case 'increment':return {count: state.count+1}
//       case 'decrement':return {count: state.count-1}
//       case 'reset': return {count: 0}
//       default :return state
//      }
// }

// function App(){
//   const[count,setCount]=useState(0)
//   const[number,setNumber]=useState(0)
//   let heavy=0;
//   heavy=useMemo(()=>{
//     for(let i=0;i<600000000;i++){}
//     return number+1
//   },[number])
//   return(
//     <>
//     <h3>{count}  {heavy}</h3>
//     <button onClick={()=>setCount(count+1)}>count</button>
//     <button onClick={()=>setNumber(number+1)}>number</button>
//     </>
//   )
// }
// export default App

function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const incrementB = useCallback(() => {
    setCountB(prev => prev + 1)
  }, [])

  return (
    <>
      <h3>{countA} {countB}</h3>

      <button onClick={() => setCountA(countA + 1)}>Increment A</button>

      <Child countB={countB} incrementB={incrementB} />
    </>
  )
}

export default App

const Child = React.memo(({ countB, incrementB }) => {
  console.log("Child rendered")
  return (
    <>
      <p>Child sees B: {countB}</p>
      <button onClick={incrementB}>Increment B</button>
    </>
  )
})
