import './Product.css'
import ProductCarousel from '../Comonents/ProductCarousel'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function productDetails() {
            let product = await axios.get("https://dummyjson.com/products/" + id)
            console.log(product.data)
            setProduct(product.data)
        }
        productDetails()
    }, [id])

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        navigate('/cart')
    }

    return (
        <div className='productPage d-flex'>
            <div className='productImageDiv halfDiv d-flex justify-content-center align-items-center'>
                <ProductCarousel images={product.images} />
            </div>
            <div className='productInfoDiv halfDiv d-flex align-items-start'>
                <div className='m-3 d-flex flex-column row-gap-3'>
                    <h1><b>{product.title}</b></h1>
                    <h6>{product.description}</h6>
                    <h6>Category : {product.category}</h6>
                    <h3><b>Price : ${product.price}</b></h3>
                    <button 
                        className='btn btn-lg w-50' 
                        style={{ background: 'lightblue' }}
                        onClick={addToCart}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
