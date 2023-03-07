import { responces, tweets } from '../../blogDB';
import '../../styles/footer.css';

import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_top_sec">
          <ul className="footer_list">
            <h3 className="footer_heading">Last Responces</h3>
            {responces.map((responce, index) => (
              <FooterItem responce={responce} key={index} />
            ))}
          </ul>
          <ul className="footer_list">
            <h3 className="footer_heading">Last Tweets</h3>
            {tweets.map((responce, index) => (
              <FooterItem responce={responce} key={index} />
            ))}
          </ul>
          <div className="footer_info">
            <h3 className="footer_heading">
              <img
                src={`${process.env.PUBLIC_URL}/resorces/img/logo_main.png`}
                alt="logo"
              />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab expedita, deserunt iste voluptatum sed nobis. Aut
              illo maxime dolorum sapiente, impedit praesentium.
              Blanditiis explicabo qui, tempore aliquam placeat
              dolorum nostrum!
            </p>
          </div>
        </div>
        <span className="copyright_text">&copy; Copyright Taken</span>
      </div>
    </footer>
  );
};

export default Footer;
