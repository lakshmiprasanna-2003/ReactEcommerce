import React, { useEffect, useState } from 'react';
import './CartPage.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Ensure each item has quantity (default = 1 if not set)
    const cartWithQuantity = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(cartWithQuantity);
    calculateTotal(cartWithQuantity);
  }, []);

  // Function to calculate total price
  const calculateTotal = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // prevent 0 or negative
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
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
                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button 
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2"><b>Subtotal: ${product.price * product.quantity}</b></p>
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
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
