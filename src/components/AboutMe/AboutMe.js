import {
  faBookOpen,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ownerInfo } from '../../blogDB';
import '../../styles/about.css';

const AboutMe = () => {
  return (
    <main>
      <div className="container">
        <div className="about_card">
          <div className="about_left_sec">
            <div className="avatar_wrapper about_avatar">
              <img src={ownerInfo.img_src} alt="owner_img" />
            </div>
            <a
              href={ownerInfo.cv || '/go'}
              className="info_link about_link"
            >
              <FontAwesomeIcon icon={faBookOpen} size={'xl'} />
              Download Cv
            </a>
            <a
              href={ownerInfo.cv || '/go'}
              className="info_link about_link"
              size={'xl'}
            >
              <FontAwesomeIcon icon={faMessage} size={'xl'} />
              Write Message
            </a>
          </div>
          <div className="about_right_sec">
            <div className="right_sec_top">
              <div className="social_links about_icon">
                {ownerInfo.socialLinks.map((social, index) => (
                  <a
                    href={social.link}
                    title={social.platform}
                    key={index}
                  >
                    {social.logo}
                  </a>
                ))}
              </div>
              <h1 className="about_name">I am {ownerInfo.name}</h1>
              <div className="about_work">{ownerInfo.work}</div>
            </div>
            <p className="owner_discription">
              {ownerInfo.discription}
            </p>
            <a
              href="https://sourov-ch-portfolio.netlify.app"
              className="link btn_p"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
