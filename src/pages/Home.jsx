import React from 'react';
import Category from '../Comonents/Category';
import Carousel from '../Comonents/Carousel';
import ProductCard from '../Comonents/ProductCard';
import cat1 from '../assets/cat1.webp';

const Home = ({ storeProduct, filteredProducts }) => {
  return (
    <div>
      <Carousel />

      <h1 className='m-5'>Categories</h1>
      <div style={{ display: 'flex', columnGap: '60px', justifyContent: 'center', textAlign: 'center' }}>
        <Category fileName={cat1} categoryName="beauty" />
        <Category fileName={cat1} categoryName="fragrances" />
        <Category fileName={cat1} categoryName="tops" />
        <Category fileName={cat1} categoryName="Denim" />
        <Category fileName={cat1} categoryName="Skincare" />
      </div>

      <h1 className='m-5'>Products</h1>
      <div className='d-flex justify-content-start column-gap-5 row-gap-4 flex-wrap'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
