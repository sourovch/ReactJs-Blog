import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/home.css';

import {
  topPosts,
  allPosts,
  catagorys,
  lastProject,
  ownerInfo,
} from '../../blogDB';
import {
  faBookOpen,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

import TopCard from './TopCard';
import PostPreviewCard from './PostPreviewCard';

import { useParams } from 'react-router-dom';

function Home({ isfilter }) {
  const { filter } = useParams();

  return (
    <div className="container">
      {!isfilter ? (
        <div className="card_sec">
          {topPosts.map((post, index) => (
            <TopCard key={index} post={post} />
          ))}
        </div>
      ) : (
        <h1 className="catagory_heading">{filter}</h1>
      )}
      <div className="main_sec_wrapper">
        <main className="all_posts">
          {!isfilter || filter.toLowerCase() === 'all'
            ? allPosts
                .slice(0, 4)
                .map((post, index) => (
                  <PostPreviewCard key={index} post={post} />
                ))
            : allPosts
                .filter(
                  (post) => post.catagory === filter.toLowerCase()
                )
                .slice(0, 4)
                .map((post, index) => (
                  <PostPreviewCard key={index} post={post} />
                ))}
          <div className="next_btn_wrapper">
            <button className="btn_p">Load More</button>
          </div>
        </main>
        <aside className="aside_sec">
          <div className="aside_card about_me">
            <div className="avatar_wrapper home_avatar">
              <img src={ownerInfo.img_src} alt="my avatar" />
            </div>
            <div className="my_info">
              <span className="name">{ownerInfo.name}</span>
              <span className="work">{ownerInfo.work}</span>
            </div>
            <div className="social_links">
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
            <a
              href={ownerInfo.cv}
              className="info_link"
              download="cv"
            >
              <FontAwesomeIcon icon={faBookOpen} size={'xl'} />
              Download Cv
            </a>
            <a href={ownerInfo.cv} className="info_link" size={'xl'}>
              <FontAwesomeIcon icon={faMessage} size={'xl'} />
              Write Message
            </a>
          </div>
          <div className="aside_card">
            <h1 className="aside_header">Categories</h1>
            <div className="catagorys">
              {[...catagorys, { name: 'Other', slug: '/go' }].map(
                (catagory, index) => (
                  <a
                    href={`${catagory.slug}`}
                    key={index}
                    className="catagory"
                  >
                    {catagory.name}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="aside_card aside_ad">
            <img
              src={`${process.env.PUBLIC_URL}/resorces/img/ad/advertisement_2x.webp`}
              alt="advertisment"
            />
          </div>
          <div className="aside_card">
            <h1 className="aside_header">Last Project</h1>
            <div className="last_project">
              <h3>{lastProject.title}</h3>
              <span>{lastProject.discription}</span>
              <div className="wrapper">
                <a href={lastProject.link} className="link btn_p">
                  Watch It
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
