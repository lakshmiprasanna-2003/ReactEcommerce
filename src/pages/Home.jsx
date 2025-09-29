import React, { useEffect, useState } from 'react'
import Carousel from '../Comonents/carousel'
import Category from '../Comonents/Category'
import axios from 'axios'
import ProductCard from '../Comonents/ProductCard'

const Home = () => {
    const[storeProduct, setStoreProduct]=useState([])
    useEffect(()=>{
        async function getProducts(){
            let k=await axios.get("https://dummyjson.com/products?limit=1000")
            console.log(k.data.products)
            setStoreProduct(k.data.products)
        }
        getProducts()
    }, [])
  return (
    <div>
        <Carousel />
        <h1 className='m-5'>Categories</h1>
        <div style={{display:'flex', columnGap:'60px', justifyContent:'center', textAlign:'center'}}>
            <Category fileName={'cat1.webp'} categoryName={'beauty'} />
            <Category fileName={'cat1.webp'} categoryName={'fragrances'} />
            <Category fileName={'cat1.webp'} categoryName={'tops'} />
            <Category fileName={'cat1.webp'} categoryName={'Denim'} />
            <Category fileName={'cat1.webp'} categoryName={'Denim'} />
            
        </div>
        <h1 className='m-5'>Products</h1>
        <div className='d-flex justify-content-start column-gap-5 row-gap-4 flex-wrap'>
            {storeProduct && storeProduct.length>1 && storeProduct.map(products =>{
                return <ProductCard product={products}/>
            })}
        </div>
    </div>
  )
}

export default Home