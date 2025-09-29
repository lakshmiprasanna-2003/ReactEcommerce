import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function StoreNavbar({ onSearch, onCategorySelect }) {
  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search);
  };

  const handleCategory = (category) => {
    if (onCategorySelect) onCategorySelect(category);
  };

  return (
    <Navbar expand="lg" style={{ background: 'lightblue' }}>
      <Container fluid>
        <Navbar.Brand href="/">Mystore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleCategory('beauty')}>Beauty</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('fragrances')}>Fragrances</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('tops')}>Tops</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('furniture')}>furniture</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('groceries')}>groceries</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('home-decoration')}>home-decoration</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('kitchen-accessories')}>kitchen-accessories</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('mens-shirts')}>mens-shirts</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('mens-shoes')}>mens-shoes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('mens-watches')}>mens-watches</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('mobile-accessories')}>mobile-accessories</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('motorcycle')}>motorcycle</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('skin-care')}>skin-care</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('smartphones')}>smartphones</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('sports-accessories')}>sports-accessories</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('sunglasses')}>sunglasses</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('tablets')}>tablets</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('vehicle')}>vehicle</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('womens-watches')}>womens-watches</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('womens-shoes')}>womens-shoes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('womens-jewellery')}>womens-jewellery</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('womens-dresses')}>womens-dresses</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategory('womens-bags')}>womens-bags</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={changeHandler}
            />
            <Button className='btn' type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavbar;
