// src/Components/SliderComponent.jsx
import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
