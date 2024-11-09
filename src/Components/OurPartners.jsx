import React from 'react';
import './OurPartners.scss'; // Assurez-vous de créer et d'importer le fichier Sass correspondant
import logo1 from './Assets/gu.png';
import logo2 from './Assets/au.png';
import logo3 from './Assets/ni.png';
import logo4 from './Assets/pha.png';
import logo5 from './Assets/jo.png';

function OurPartners() {
  const partners = [
    { id: 1, name: 'GUCCI中国', description: '提供旅行服装配搭', logo: logo1 },
    { id: 2, name: 'AUDI', description: '提供旅行服务汽车', logo: logo2 },
    { id: 3, name: '高铁友谊小镇', description: '提供旅行住宿与餐饮', logo: logo3 },
    { id: 4, name: '联合利华', description: '提供旅行日化供应', logo: logo4 },
    { id: 5, name: 'Jordan Group', description: '提供旅行保险服务', logo: logo5 }
  ];

  return (
    <div className="our-partners">
      <h2>OUR PARTNERS</h2>
      <div className="partner-list">
        {partners.map(partner => (
          <div key={partner.id} className="partner">
            <img src={partner.logo} alt={partner.name} className="logo" />
            <div className="info">
              <div className="name">{partner.name}</div>
              <div className="description">{partner.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
