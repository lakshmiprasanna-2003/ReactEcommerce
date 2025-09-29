import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductCard({product}) {
  return (
    <Card style={{display:'flex', width: '18rem' }}>
      <Link to={`/ReactEcommerce/product/${product.id}`}>
        <Card.Img variant="top" src={product.thumbnail} />
      </Link>
      <Card.Body>
        <Card.Title><b>{product.title}</b></Card.Title>
        <Card.Text><b>Price: ${product.price}</b></Card.Text>
        <Card.Text>Category: {product.category}</Card.Text>
        
      </Card.Body>
    </Card>

  );
}

export default ProductCard;