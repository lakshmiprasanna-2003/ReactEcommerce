import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';





function Carousel() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slider1} height={"500"} width={"100%"} style={{objectFit:"cover", objectPosition:"center"}}/>
        </div >
        <div>
          <img src={slider2} height={"500"} width={"100%"} style={{objectFit:"cover", objectPosition:"top"}} />
        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
