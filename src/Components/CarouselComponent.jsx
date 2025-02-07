import React from 'react';
import Slider from 'react-slick';
import './CarouselComponent.scss';

// Import images
import auImage from './Assets/br.png';
import ggImage from './Assets/ft.png';
import joImage from './Assets/tr.png';
import mmImage from './Assets/yt.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img src={auImage} alt="Image 1" className="carousel-image" />
        <div className="carousel-caption">
          <h3>OTC 成对交易</h3>
          <p>OTC 配对交易允许用户之间直接进行点对点交易，提供更灵活、更快捷的流程，无需经过传统的加密货币交易所。</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ggImage} alt="Image 2" className="carousel-image" />
        <div className="carousel-caption">
          <h3>OTC 成对交易</h3>
          <p>OTC 配对交易允许用户之间直接进行点对点交易，提供更灵活、更快捷的流程，无需经过传统的加密货币交易所。</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={joImage} alt="Image 3" className="carousel-image" />
        <div className="carousel-caption">
          <h3>OTC 成对交易</h3>
          <p>OTC 配对交易允许用户之间直接进行点对点交易，提供更灵活、更快捷的流程，无需经过传统的加密货币交易所。</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={mmImage} alt="Image 4" className="carousel-image" />
        <div className="carousel-caption">
          <h3>OTC 成对交易</h3>
          <p>OTC 配对交易允许用户之间直接进行点对点交易，提供更灵活、更快捷的流程，无需经过传统的加密货币交易所。</p>
        </div>
      </div>
    </Slider>
  );
}

export default CarouselComponent;


