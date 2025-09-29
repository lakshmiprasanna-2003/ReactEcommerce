import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import StoreNavbar from './Comonents/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/CartPage';
import axios from 'axios';

const App = () => {
  const [storeProduct, setStoreProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get('https://dummyjson.com/products?limit=1000');
      setStoreProduct(res.data.products);
      setFilteredProducts(res.data.products);
    }
    getProducts();
  }, []);

  const handleSearch = (query) => {
    if (!query) setFilteredProducts(storeProduct);
    else {
      const lower = query.toLowerCase();
      setFilteredProducts(
        storeProduct.filter(p => p.title.toLowerCase().includes(lower))
      );
    }
  };

  const handleCategorySelect = (category) => {
    setFilteredProducts(
      storeProduct.filter(p => p.category.toLowerCase() === category.toLowerCase())
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Navbar visible everywhere */}
      <StoreNavbar onSearch={handleSearch} onCategorySelect={handleCategorySelect} />

      <Routes>
        <Route
          path="/ReactEcommerce"
          element={<Home storeProduct={storeProduct} filteredProducts={filteredProducts} />}
        />
        <Route path="/ReactEcommerce/product/:id" element={<Product />} />
        <Route path="/ReactEcommerce/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
