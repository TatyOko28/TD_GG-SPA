import React from 'react';
import './TravelLinks.scss';

const hotTravelRoutes = [
  "欧洲定制旅行", "南美定制旅行", "澳大利亚定制旅行", "新西兰定制旅行", "纳米比亚私人定制旅行", 
  "肯尼亚私人定制旅行", "马尔代夫私人定制旅行", "澳大利亚私人定制旅行", "新西兰定制旅行", 
  "大溪地定制旅行", "加拿大定制旅行", "美国定制旅行", "巴西定制", "泰国旅游定制", "斯里兰卡旅行定制", 
  "迪拜高端旅行", "南非高端旅行", "摩洛哥高端旅行", "南极高端旅行", "日本旅游"
];

const friendLinks = [
  "定制旅游", "东南亚旅游", "琼瑶玫瑰庄园", "宁波旅游", "黄山旅行社", "青海湖包车", "研学旅行", 
  "平潭岛旅游攻略", "高端旅游", "定制游", "十渡旅游", "苏州一日游", "恩施大峡谷", "北京一日游", 
  "专业酒店设计", "旅游索引", "川藏线自驾", "市井火锅加盟", "贤合庄官网"
];

const TravelLinks = () => {
  return (
    <div className="travel-links">
      <div className="hot-routes">
        <h3>热门旅游路线</h3>
        <div className="links">
          {hotTravelRoutes.map((route, index) => (
            <span key={index} className="link">{route}</span>
          ))}
        </div>
      </div>
      <div className="friend-links">
        <h3>友情链接</h3>
        <div className="links">
          {friendLinks.map((link, index) => (
            <span key={index} className="link">{link}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelLinks;
