import todoReducer from './counterSlice'
import { configureStore } from '@reduxjs/toolkit'

const Store=configureStore({
    reducer:{
        todos:todoReducer
    }
})
export default Store