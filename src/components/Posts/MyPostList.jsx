import "./PostList.css";

import { useEffect, useState } from "react";
import { deletePost, getAllMyPosts } from "../../services/postServices/postServices";
import "./PostList.css";
import { Link, useNavigate } from "react-router-dom";

export const MyPostList = ({ currentUser }) => {
  const [allMyPosts, setAllMyPosts] = useState([]);


  useEffect(() => {
    getAllMyPosts(currentUser.id).then((myPostArray) => {
      setAllMyPosts(myPostArray);
    });
  }, [currentUser.id]);

  const handleDelete=(post)=>{
   

    deletePost(post).then(()=>{
      getAllMyPosts(currentUser.id).then((myPostArray) => {
        setAllMyPosts(myPostArray);
    
    })})}
        

  return (
    <>
      <div className="posts">
        <h3>My Posts</h3>

        {allMyPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="post-header">
                <Link to={`/posts/${post.id}`} key={post.id}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
              <div className="btn-container">
                <button className="btn btn-edit" onClick={() => handleDelete(post)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
