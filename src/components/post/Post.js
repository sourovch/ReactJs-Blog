import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../../styles/post.css';
import { authors, blogs } from '../../blogDB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faReply } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  return (
    <main>
      <article>
        <div className="container">
          <div className="blog_card">
            <span className="blog_time">{blogs[0].createdAt}</span>
            <h1 className="blog_title">{blogs[0].title}</h1>
            <p className="blog_disc">{blogs[0].discription}</p>
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${blogs[0].videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blogs[0].markdown}
            </ReactMarkdown>
          </div>
        </div>
      </article>
      <div className="container">
        <div className="author">
          {(() => {
            const authorInfo = authors.find(
              (author) =>
                author.name.toLowerCase() ===
                blogs[0].author.toLowerCase()
            );

            return authorInfo ? (
              <div className="author_card">
                <div className="avatar_wrapper author_avatar">
                  <img src={authorInfo.avatar} alt="author" />
                </div>
                <div className="author_info">
                  <div className="author_name">{authorInfo.name}</div>
                  <div className="author_disc">
                    {authorInfo.discription}
                  </div>
                </div>
              </div>
            ) : (
              ''
            );
          })()}
        </div>
        <div id="comments">
          <div className="comment_h">Comments</div>
          {blogs[0].comments.map((comment, index) => (
            <div className="comment_wrapper" key={index}>
              <div className="c_card comment_card" key={index}>
                <span className="comment_author">
                  {comment.author}
                </span>
                <span className="comment">{comment.comment}</span>
                <span className="comment_time">
                  {comment.commentedAt}
                </span>
                <div className="comment_card_bottom">
                  <span className="likes">
                    <FontAwesomeIcon icon={faHeart} />{' '}
                    {comment.likes.length}
                  </span>
                  <span className="likes">
                    <FontAwesomeIcon icon={faReply} />{' '}
                    {comment.replies.length}
                  </span>
                </div>
              </div>
              <form className="reply_form">
                <input type="text" placeholder="Write your reply" />
                <button type="submit">Reply</button>
              </form>
              {comment.replies.map((replies, index) => (
                <div className="c_card reply_card" key={index}>
                  <span className="comment_author">
                    {replies.author}
                  </span>
                  <span className="comment">{replies.reply}</span>
                  <span className="comment_time">
                    {replies.commentedAt}
                  </span>
                  <div className="comment_card_bottom">
                    <span className="likes">
                      <FontAwesomeIcon icon={faHeart} />{' '}
                      {replies.likes.length}
                    </span>
                  </div>
                </div>
              ))}
              <form className="comment_form">
                <input type="text" placeholder="Write your comment" />
                <button type="submit">Comment</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Post;
