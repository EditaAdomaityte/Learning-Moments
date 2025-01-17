export const getUserAndTheirPosts=(userId)=>{
    return fetch (`http://localhost:8088/users?id=${userId}&_embed=posts`).then((res)=>res.json())
}

export const updateProfile=(user)=>{
    return fetch (`http://localhost:8088/users/${user.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)  

    }
    )
}
