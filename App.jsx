import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTodos } from './counterSlice'
function App() {
  const {todos,status,error}=useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])
  return (
    <>
    <h1>todos</h1>
    {status ==="loading"&& <p>loading</p>}
    {status==="failed" && <p>error</p>}
    {status==="succeeded"&& (
      <ul>
        {todos.map((toto)=>(
          <li key={todos.id}>
            {todo.title} {todo.completed ? "yes":"no "}
          </li>
        ))}
      </ul>
    )}
    </>
  )
}

export default App