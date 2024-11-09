import React from 'react';
import './Footer.scss'; // Assurez-vous que ce fichier SCSS existe

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <span>客服电话: +79920746361</span>          
          <span>商家合作: elladaandy@gmail.com</span>
        </div>
        <div className="footer-links">
          <a href="#">关于我们</a>
          <a href="#">诚聘英才</a>
          <a href="#">常见问题</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © 2012-2024 All Rights Reserved TD (成都)文化传播有限公司 版权所有 | TDICP备12027707号-1 | 网站地图</span>
      </div>
    </footer>
  );
};

export default Footer;
