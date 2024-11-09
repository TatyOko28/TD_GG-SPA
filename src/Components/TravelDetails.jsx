import React from 'react';
import './TravelDetails.scss';

const travelData = [
  { days: 20, people: 16 },
  { days: 12, people: 6 },
  { days: 17, people: 3 },
];

const TravelDetails = () => {
  return (
    <div className="travel-details">
      <div className="travel-items">
        {travelData.map((data, index) => (
          <div key={index} className="travel-item">
            <p className='ps'>天数: {data.days} 人数: {data.people}</p>
            <button className="detail-button">详情 > </button>
          </div>
        ))}
      </div>
      <button className="more-feedback-button">更多客户反馈 > </button>
      <div className="magazine-section">
        <h3>TRAVEL MAGAZINES</h3>
        <h4>旅行灵感</h4>
      </div>
    </div>
  );
};

export default TravelDetails;
