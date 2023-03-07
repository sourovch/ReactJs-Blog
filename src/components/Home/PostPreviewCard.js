import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

const PostPreviewCard = ({ post }) => {
  return (
    <div className="post_preview">
      <div className="preview_top">
        <span className="preview_post_time">{post.createdAt}</span>
        <span className="preview_post_cat">{post.catagory}</span>
      </div>
      <h1 className="preview_title">{post.title}</h1>
      <p className="post_discription">{post.discription}</p>
      <div className="preview_foot">
        <a
          href={`/post/${post.slug}`}
          className="preview_read_more link btn_p"
          title={post.title}
        >
          Read More
        </a>
        <a
          href={`/post/${post.slug}/#comments`}
          className="preview_comments link"
        >
          <FontAwesomeIcon icon={faComment} size={'xl'} />
          {post.comment.length} Response
        </a>
        <span className="preview_likes">
          <FontAwesomeIcon icon={faHeart} size={'xl'} />
          {post.likes.length} Likes
        </span>
      </div>
    </div>
  );
};

export default PostPreviewCard;
