export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=user&_expand=topic&_embed=likes").then((res)=>res.json())
}

export const getAllTopics=()=>{
    return fetch ("http://localhost:8088/topics").then((res)=>res.json())
}

export const getPostByPostId=(postId)=>{
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=user&_expand=topic&_embed=likes`).then((res)=>res.json())
}

export const assignLike=(likedPost)=>{
    return fetch("http://localhost:8088/likes",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(likedPost),
})
}

export const createNewPost=(post)=>{
    return fetch("http://localhost:8088/posts",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
})
}

export const getAllMyPosts=(currentUserId)=>{
    return fetch(`http://localhost:8088/posts?userId=${currentUserId}`).then((res)=>res.json())

}

export const deletePost = (post)=>{
  
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "DELETE",})
  } 

export const updatePost=(post)=>{
    return fetch (`http://localhost:8088/posts/${post.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)  

    }
    )
}

export const getLikesAndPostsByUserId=(userId)=>{
    return fetch(`http://localhost:8088/likes?userId=${userId}&_expand=post`).then((res)=>res.json())
}

export const deleteLike = (like)=>{
    return fetch(`http://localhost:8088/likes/${like.id}`, {
        method: "DELETE",})
  } 