import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../pages/Product";


function ProductCarousel({images=[]}) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <div className="slider-container w-50 ">
      <Slider {...settings}>
          {images && images.length>0 && images.map((img, index)=>(
                <div key={index} className="d-flex justify-content-center align-items-center">
                  <img src={img} width={'200px'} alt={`/ReactEcommerce/product-${index}`}/>
                </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
