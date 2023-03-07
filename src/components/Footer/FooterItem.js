import React from 'react';

const FooterItem = ({ responce }) => {
  return (
    <li>
      {responce?.avatar && (
        <div className="avatar_wrapper footer_avatar">
          <img src={responce.avatar} alt="response dp" />
        </div>
      )}
      {!responce?.avatar && responce?.logo && responce.logo}
      <div className="li_text">
        <span className="sender">
          {responce.sederName} {responce.userName}{' '}
        </span>
        <span className="responce">{responce?.responce}</span>
        <span className="time">{responce?.time}</span>
        <span className="resp_disc">
          {responce?.discription}
          {responce?.tweet}
        </span>
      </div>
    </li>
  );
};

export default FooterItem;
