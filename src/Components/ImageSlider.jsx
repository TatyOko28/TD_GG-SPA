import React, { useState, useEffect } from 'react';
import './ImageSlider.scss';

const images = [
  '/gg.jpeg',  // Assuming the image is in the 'public' directory
  '/ff.jpeg',
  '/ee.jpeg',
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % length);  // Cycle through the images
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div key={index} className={index === current ? 'slide active' : 'slide'}>
          {index === current && <img src={image} alt={`Slide ${index}`} />}
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
