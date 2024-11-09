import React from 'react';
import './WelcomePage.scss';  // Import the Sass file for styling

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="text-section top">
        <h1 className='hi'>WELCOME TO TD CLUB</h1>
        <p className='po'>泰达会欢迎您</p>
      </div>
      <div className="text-section middle">
        <p>作为中国最早的定制旅行机构之一，</p>
        <p>我们提供品质、深度、专业的私人旅行服务。</p>
        <p>专注定制旅行11年，</p>
        <p>覆盖超60个国家，</p>
        <p>团队100%拥有海外学习工作经历。</p>
      </div>
      <div className="text-section bottom">
        <div className="featured-products">
          <h1 className='fg'>FEATURED PRODUCTS</h1>
          <p>独家推介</p>
          <p>一个产品只是我们信心的作品，每一个细节都是我们的用心。</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
