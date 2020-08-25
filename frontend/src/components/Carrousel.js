import React from "react";
import { Carousel } from 'react-bootstrap';
import Firstcarrousel from "../images/Firstcarrousel.jpeg";
import Secondcarousel from "../images/Secondcarousel.jpeg";
import thirdcarousel from "../images/thirdcarousel.jpeg";

const CarouselComponent = () => (
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Firstcarrousel}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Secondcarousel}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdcarousel}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)

export default CarouselComponent;
