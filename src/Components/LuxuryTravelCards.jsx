import React from 'react';
import './LuxuryTravelCards.scss';

function LuxuryTravelCards() {
  return (
    <div className="luxury-travel">
      <div className="overlay">
        <div className="header">
          <h1>DEFINE LUXURY TRAVEL</h1>
          <p>定义奢华旅行</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-title">奢华的旅行套餐</div>
            <p>每位高级顾问拥有至少的旅行顾问经验和国际旅游经历, 7/24小时服务—切换区域。</p>
          </div>
          <div className="card">
            <div className="card-title">私人订制的细节服务</div>
            <p>为孩子安排小班教育, 家庭式管家服务，“奢华”博览完美融合, 绝对利益轻松化, 让私人定制划算多。</p>
          </div>
          <div className="card">
            <div className="card-title">保障优质的旅行体验</div>
            <p>准确的人员服务、高品质服务、成熟团队, 不仅为的创意匠心独运。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuxuryTravelCards;
