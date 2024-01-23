import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproduct,setAllProduct]= useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)})
  }
  useEffect(()=>{
    fetchInfo();
  },[])
  const remove_product= async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
          Accept:'applicatiom/json',
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id}), 
  })
  await fetchInfo()
  }
  return (
    <div className='list-product'>
      <h1> All List Product</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
{
allproduct.map((product) => (
  <div key={product.id} className="listproduct-format-main listproduct-format">
    <img src={product.image} alt="" className="listproduct-product-icon" />
    <p>{product.name}</p>
    <p>${product.old_price}</p>
    <p>${product.new_price}</p>
    <p>{product.category}</p>
    <img onClick={() => { remove_product(product.id) }} className='listproduct-remove-icon' src={cross_icon} alt="" />
    <hr />
  </div>
))

}

      </div>
    </div>
  )
}

export default ListProduct