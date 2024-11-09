import React from 'react';
import './LuxuryJetContactForm.scss'; // Assurez-vous que ce fichier SCSS existe

function LuxuryJetContactForm() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="luxury-jet-contact-form-container">
      <div className="luxury-jet-contact-form">        
        <div className="form-container">
          <h1>"真定制 省心 懂您"</h1>
          <p>新用户获赠¥300元礼包</p>
          <form>
            <input type="text" placeholder="阁下姓名" />
            <input type="text" placeholder="Passport number - 护照号" />
            <textarea placeholder="ID number - 身份证号）"></textarea>
            <button type="submit">请顾问联系我</button>
          </form>
          <p className="note">专业定制师将于20分钟内（工作日）与您联系，如有特别要求请备注</p>
          <div className="sidebar">          
            <button onClick={() => handleButtonClick('https://chat.whatsapp.com/LaF9vnvW8BmFSYOLKkaMCb')} className="contact-button">Contact me by whatsapp</button>
            <button onClick={() => handleButtonClick('https://t.me/+UY2I6lVpUx84N2E0')} className="contact-button">Contact me by telegram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuxuryJetContactForm;
