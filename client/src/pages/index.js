import Image from 'next/image'
import { Inter } from 'next/font/google'
import{useEffect, useState} from 'react'
import NavBar from '../component/navbar'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const inter = Inter({ subsets: ['latin'] })

 export default function Home() {
  const [productsList,setProductsList]=useState([])
  
  


 const fetchALLProducts = async()=>{
const res = await fetch('http://localhost:8080/products')
 const data = await res.json()
 setProductsList(data.productsList) 
}
 useEffect(()=>{
    fetchALLProducts()
   },[])
 return (
 <div>
  <NavBar/>
{
  productsList.length> 0 ? (
    <div style={{display:'flex'}}>
      <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>

      {productsList.map((item)=> (
      <div style={{ width:'17%',height:'19%',backgroundColor:'black',color:'black',margin:'30px',padding:'9px 1px 5px 4px',textAlign:'center'}}>
        <Image src="https://static-01.daraz.com.np/p/68b693fa58268cb9d8d3d1a2d94a1876.jpg" alt="tshirt" width={180} height={150}/>
        {item.productName}
        {item.productPrice}
        <ShoppingCartIcon onClick={()=> alert(item._id)}/>
        </div>
        ))}
      </div>
  ) : "loading"
}
 </div>
 )
 }