import React from "react";
import Slider from "react-slick";
import img from "../../assets/mejor precio.png"
import img1 from "../../assets/envios a domicilio.png"
import img2 from "../../assets/carousel1.png"
import "./Carousel.css"; 

const CarouselComponent = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,

  };

  const images = [ img, img1, img2, ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
            src={image} 
            alt={`Slide ${index + 1}`}
            className="imgCarousel"
             />

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
