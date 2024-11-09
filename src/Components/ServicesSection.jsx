import React from 'react';
import './ServicesSection.scss'; // Import the Sass file for styling

function ServicesSection() {
  return (
    <div className="services-section">
      <div className="content">
        <h2 className='kl'>OUR SERVICES</h2>
        <p className='hn'>服务介绍</p>
        <div className="service-list">
          <p>私人行程定制</p>
          <p>奢华酒店预订</p>
          <p>私人飞机/游艇</p>
          <p>礼宾服务及管家</p>
          <p>全球购物优惠</p>
          <p>贵宾室服务支持</p>
        </div>        
      </div>
    </div>
  );
}

export default ServicesSection;
