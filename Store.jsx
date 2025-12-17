import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { increase } from './CounterSlice'

const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})
export default store