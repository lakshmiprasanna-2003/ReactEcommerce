import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function carousel() {
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
          <img src="public/slider1.jpg" height={"500"} width={"100%"} style={{objectFit:"cover", objectPosition:"center"}}/>
        </div >
        <div>
          <img src="public/slider2.jpg" height={"500"} width={"100%"} style={{objectFit:"cover", objectPosition:"top"}} />
        </div>
        
      </Slider>
    </div>
  );
}

export default carousel;
