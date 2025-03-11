import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Welcome from "../../assets/header/Welcome.png";
import Classicos from "../../assets/header/Classicos.png";
import School from "../../assets/header/School.png";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.active {
    opacity: 1;
  }
`;

const images = [Welcome, Classicos, School];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <SliderImage
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? "active" : ""}
        />
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
