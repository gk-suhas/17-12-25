import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk(
    "todos/fetchTodos",
    async()=>{
        let result=await fetch("https://jsonplaceholder.typicode.com/todos")
        let data=await result.json()
        return data
    }
)

const initialState={
    todos:[],
    status:"idle",
    error:null
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.status="loading"
        })
        
        .addCase(fetchTodos.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})
export default todoSlice.reducer