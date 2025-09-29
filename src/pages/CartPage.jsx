import React, { useEffect, useState } from 'react';
import './CartPage.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  // Function to calculate total price
  const calculateTotal = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <div className='cartPage'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((product) => (
          <div 
            key={product.id || product.title} 
            className="cartItem card d-flex flex-column column-gap-4"
          >
            <div className='d-flex align-items-center me-3 justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src={product.thumbnail} alt={product.title} style={{height:'200px'}} />
                <div className='productInfo ms-3'>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
              <button 
                className="btn btn-dark ms-3" 
                onClick={() => removeFromCart(product.id)}
              >
                X
              </button>
            </div>
          </div>
        ))
      )}
      <div className="totalPrice mt-3">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default Cart;
