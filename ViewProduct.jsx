import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function ViewProduct() {
    const[product,setProduct]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        const fakestore=async ()=>{
            const fake=await axios.get("https://fakestoreapi.com/products")
            const local=await axios.get("http://localhost:2000/Product")

            const existing =local.data.map(p=>p.title)

            for(let item of fake.data){
                if(!existing.includes(item.title)){
                    await axios.post("http://localhost:2000/Product",{
                        title: item.title,
                        image: item.image,
                        price: item.price
                    })
                }
            }
            const updated=await axios.get("http://localhost:2000/Product")
            setProduct(updated.data)
        }
        fakestore()
    },[])
    const dele=async (id) => {
    await axios.delete(`http://localhost:2000/Product/${id}`);
    setProduct(prev => prev.filter(p => p.id !== id));
  };
  return (
    <>
    
    <button onClick={()=>navigate("/addProduct")}>Add product</button>
    <div>
        {product.map(p=>(
            <div key={p.id}>
                <img src={p.image} alt="" width={"70px"}/>
                <h3>{p.id}</h3>
                <h3>{p.title}</h3>
                <h3>{p.price}</h3>
                <button onClick={()=>navigate(`/editProduct/${p.id}`)}>edit</button>
                <button onClick={()=>dele(p.id)}>delete</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default ViewProduct