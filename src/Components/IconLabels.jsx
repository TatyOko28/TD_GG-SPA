import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMapMarkerAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import './IconLabels.scss';

function IconLabels() {
  return (
    <div className="icon-labels-wrapper">
      <div className="enterprise-service">
        <h2 className="h2">ENTERPRISE SERVICE</h2>
        <p className="jh">企业服务</p>
      </div>      
      <div className="icon-labels">
        <div className="icon-label">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          <p>企业团建</p>
        </div>
        <div className="icon-label">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p>商旅安排</p>
        </div>
        <div className="icon-label">
          <FontAwesomeIcon icon={faAward} className="icon" />
          <p>客户关怀</p>
        </div>
      </div>
    </div>
  );
}

export default IconLabels;
