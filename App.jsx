import React from 'react'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ViewProduct from './viewProduct'
import axios from 'axios'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<ViewProduct/>
  },
  {
    path:'/editProduct/:id',
    element:<EditProduct/>
  },
  {
    path:'/addProduct',
    element:<AddProduct/>
  }
])



export default function App(){
  return <RouterProvider router={router} />
}