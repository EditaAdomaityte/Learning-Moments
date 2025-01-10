import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postServices/postServices"
import "./AllPost.css"

export const AllPosts =()=>{
    const [allPosts ,setAllPosts ] = useState([])
    {/*const [numberOfPostLikes, setNumberOfPostLikes]= useState([])*/}
  

  useEffect(()=>{
    getAllPosts().then((postArray)=>{
        setAllPosts(postArray)
    })
  },[])

    return (<>
    <div className="posts">
        <h2>All Posts</h2>
        {allPosts.map((post)=>{
            return(
                <>
                <div className="post">
                    <div className="post-header">
                    <h3>{post.title}</h3>
                    </div>
                    <div className="post-topic">
                    Topic: {post.topic.name}
                    </div>
                    <div className="post-likes">
                    # of likes: {(post.likes).length}
                    </div>
                </div>
                </>
            )
        })}

    </div>
    </>

    )
}