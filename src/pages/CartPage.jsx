import React, { useEffect, useState } from 'react';
import './CartPage'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
    }, []);

    return (
        <div className='cartPage'>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((product, index) => (
                    
                    <div key={index} className="cartItem ">
                        <div className='d-flex align-items-center me-3'>
                            <img src={product.thumbnail} />
                            <div className='productInfo' >
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        </div>
                        
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
