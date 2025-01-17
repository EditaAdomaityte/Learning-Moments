import { useEffect, useState } from "react";
import "./PostList.css";
import { deleteLike, getLikesAndPostsByUserId } from "../../services/postServices/postServices";
import { Link } from "react-router-dom";

export const Favorites=({currentUser})=>{
    const [likedPosts, setLikedPosts]=useState([])

    useEffect(()=>{
        getLikesAndPostsByUserId(currentUser.id).then((array)=>{
            setLikedPosts(array)
        })
    },[currentUser])

    const handleUnlike=(like)=>{
        deleteLike(like).then(()=>{
            getLikesAndPostsByUserId(currentUser.id).then((array)=>{
                setLikedPosts(array)
        })})
    }

    return (
        <>
          <div className="posts">
            <h2>Liked Posts</h2>
            
        {likedPosts.map((like) => {
          return (
            <div className="post" key={like.post.id}>
              <div className="post-header">
                <Link to={`/posts/${like.post.id}`} key={like.post.id}>
                  <h3>{like.post.title}</h3>
                </Link>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-edit"
                  onClick={() => handleUnlike(like)}
                 
                >
                  Unlike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
