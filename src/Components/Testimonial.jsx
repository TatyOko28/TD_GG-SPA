import React from 'react';
import './Testimonial.scss';
import sampleImage from './cc.jpeg'; // Update the path to your image

const Testimonial = ({ title, subtitle, text, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-title">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <img src={image || sampleImage} alt={title} className="testimonial-image" />
      </div>
      <div className="testimonial-body">
        <p className="testimonial-quote"><span className='sp'>“</span>{text}<span className='sp'>”</span></p>
      </div>
    </div>
  );
};

export default Testimonial;
