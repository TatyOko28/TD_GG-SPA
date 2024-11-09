import React, { useState } from 'react';
import './Top.scss';  // Import the Sass file for styling
import Pop from './Pop';
import { GiNotebook } from "react-icons/gi";

function BackgroundImageComponent() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'popup') {
      setShowPopup(false);
    }
  };

  return (
    <div className="background-image">
      {/* Add content over your background image here */}
      <div className="content">
        <h1>- 全球华人定制旅行领先品牌 -</h1>
        <p>成立于2014年</p>
        <p>用心为您提供专业服务</p>
      </div>
      <button className="open-popup-btn" onClick={togglePopup}><GiNotebook className='gi'/>Contact me</button>
      {showPopup && (
        <div className="popup" onClick={handleOutsideClick}>
          <div className="popup-inner">
            <Pop/>
          </div>
        </div>
      )}
    </div>
  );
}

export default BackgroundImageComponent;
