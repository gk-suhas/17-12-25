import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
function EditProduct() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [data,setData]=useState({
        id:"",
        title:"",
        image:"",
        price:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:2000/Product/${id}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[id])
    function handleUpdate(){
        axios.put(`http://localhost:2000/Product/${id}`,data)
        .then(()=>{
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    function handleChange(e){
        const{name,value}=e.target
        setData(prev=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <>
    <div>
       <input type="text" value={data.id} disabled />

      <input
        type="text"
        name="title"
        value={data.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        type="text"
        name="price"
        value={data.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
    
    </>
  )
}

export default EditProduct