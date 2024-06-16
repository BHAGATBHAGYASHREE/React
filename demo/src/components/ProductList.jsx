// import React from 'react'
import { useEffect, useState } from 'react'
import Product from './Product'
import './ProductList.css'
function ProductList() {
    // let products=[
    //     {
    //     id:1,
    //     name:"iphone 15",
    //     price:79900,
    //     imgUrl:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673189/Croma%20Assets/Communication/Mobiles/Images/300652_0_ncocr2.png?tr=w-400"
    //     },
    //     {
    //         id:2,
    //         name:"iphone 14",
    //         price:200000,
    //         imgUrl:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672754/Croma%20Assets/Communication/Mobiles/Images/261939_0_pupa1w.png?tr=w-400"
    //     },
    //         {
    //         id:3,
    //         name:"iphone 13",
    //         price:69900,
    //         imgUrl:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009408/Croma%20Assets/Communication/Mobiles/Images/249840_0_ha9g80.png?tr=w-400"
    //         },
    // ]
    let[products,setProducts]=useState([])
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{ method:"GET"

        })
    
    .then((response)=>{
        return response.json()
      
      })
      .then((data)=>{
        console.log(data)
        setProducts(data)
      })
      .catch((err)=>{
        console.log(err)
      })
      
      },[])
  return (
    <section className="product_list">
        {
products.map((prod)=>{
    return (
        <Product
        name={prod.title}
        imgUrl={prod.image}
        price={prod.price}/>
    )
})
}

    </section>
  )
}

export default ProductList