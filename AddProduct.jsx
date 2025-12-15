import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddProduct() {
    const navigate=useNavigate()

    const[data,setData]=useState({
        title:"",
        image:"",
        price:""
    })
    const handleAdd=async ()=>{
        await axios.post("http://localhost:2000/Product",{
            title:data.title,
            image:data.image,
            price:data.price
        })
        .then(()=>alert("added sucessfully"))
        .catch((err)=>alert(err))
    }
    const handleChnage=(e)=>{
        const {name,value}=e.target
        setData(prev=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <>
    <h2>Add Product</h2>
    <div>
        <input type="text" 
         name="title" 
         value={data.title}
         onChange={handleChnage}
        />
        <input type="text"
         name="image"
         value={data.image}
         onChange={handleChnage}
        />
        <input type="text" 
         name="price"
         value={data.price}
         onChange={handleChnage}
        />
        <button onClick={handleAdd}>Add Product</button>
    </div>
    </>
  )
}

export default AddProduct