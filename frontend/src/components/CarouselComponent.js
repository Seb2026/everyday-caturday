import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselComponent extends Component {
  render() {
    return (
      <div class="carousel-wrapper">
    <div class="centerCarousel">
        <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} width="300px">
          <div className="carouselImgs">
            <img src="../Mao1a.jpg" alt="Mao" />
          </div>
          <div className="carouselImgs">
            <img src="../Mao2.jpg" alt="Mao" />
          </div>
          <div className="carouselImgs">
            <img src="../Mao3.jpg" alt="Mao" />
          </div>
          <div className="carouselImgs">
            <img src="../Mao4.jpg" alt="Mao" />
          </div>
        </Carousel>
      </div>
      </div>
    );
  }
}
