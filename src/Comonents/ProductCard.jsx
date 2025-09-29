import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  // Add to cart handler
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if product already in cart
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;  // update quantity
    } else {
      cart.push({ ...product, quantity }); // add with selected qty
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} ${product.title}(s) added to cart ✅`);
  };

  return (
    <Card style={{ display: 'flex', width: '18rem', height:'25rem' }}>
      <Link to={`/ReactEcommerce/product/${product.id}`}>
        <Card.Img variant="top" src={product.thumbnail} />
      </Link>
      <Card.Body>
        <Card.Title><b>{product.title}</b></Card.Title>
        <Card.Text><b>Price: ${product.price}</b></Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
