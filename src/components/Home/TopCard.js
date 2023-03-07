import React from 'react';

const TopCard = ({ post }) => {
  return (
    <a
      className="top_card"
      title={post.title}
      href={`/post/${post.slug}`}
    >
      <img src={post.banner} alt={post.title} className="card_bg" />
      <div className="card_content">
        <span className="card_title">{post.title}</span>
        <div className="wrapper">
          <span className="card_cat">{post.catagory}</span>
        </div>
        <span className="card_time">{post.createdAt}</span>
      </div>
    </a>
  );
};

export default TopCard;
