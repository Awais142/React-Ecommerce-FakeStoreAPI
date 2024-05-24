// src/Components/SliderComponent.jsx
import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: "block",
        background: "black",
        right: "10px", // Move arrow inside
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: "block",
        background: "black",
        left: "10px", // Move arrow inside
        zIndex: 1, // Ensure it's above other elements
      }}
      onClick={onClick}
    />
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-auto m-0 p-0">
        <img
          src="/Assets/slide.png"
          alt="Slide 1"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full h-auto m-0 p-0">
        <img
          src="/Assets/slide 1.png"
          alt="Slide 2"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full h-auto m-0 p-0">
        <img
          src="/Assets/slide 3.png"
          alt="Slide 3"
          className="w-full h-auto object-cover"
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
