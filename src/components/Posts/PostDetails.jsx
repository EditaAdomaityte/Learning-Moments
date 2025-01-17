import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  assignLike,
  getPostByPostId,
} from "../../services/postServices/postServices";
import "./PostList.css";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState({});


  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    getPostByPostId(postId).then((data) => {
      const postObj = data[0];
      setPost(postObj);
    });
  }, [postId]);

  const handleLike = () => {
    const postLike = {
      userId: currentUser.id,
      postId: post.id,
    };
    assignLike(postLike).then(()=>{
      navigate('/Favorites')
    });
  };

  return (
    <section className="post">
      <header className="post-header">{post.title}</header>
      <div>
        <span className="post-info">Author:</span>
        <Link to={`/Profile/${post.userId}`} >{post.user?.fullName}</Link>
      </div>
      <div>
        <span className="post-info">Topic:</span>
        {post.topic?.name}
      </div>
      <div>
        <span className="post-info">Date:</span>
        {post.date}
      </div>
      <div>
        <span className="post-info">Body:</span>
        {post.body}
      </div>
      <div>
        <span className="post-info"># of👍:</span>
        {post.likes?.length}
      </div>
      <div className="btn-container">
        {post.userId === currentUser.id && (
          <button className="btn btn-edit" onClick={()=>{navigate(`/posts/${postId}/edit` )}}>Edit</button>
        )}
        {post.userId !== currentUser.id && (
          <button className="btn btn-like" onClick={handleLike}>
            👍
          </button>)}
      </div>
    </section>
  );
};
