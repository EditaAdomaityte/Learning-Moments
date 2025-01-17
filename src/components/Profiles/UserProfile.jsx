import { useEffect, useState } from "react"
import {  getUserAndTheirPosts } from "../../services/profileServices/profileServices"
import { useNavigate, useParams } from "react-router-dom"
import "./UserProfile.css"

export const UserProfile=({currentUser})=>{
    const [user,setUser]=useState({
    })
   

    const { userId } = useParams();
    console.log
    useEffect(()=>{
        getUserAndTheirPosts(userId).then((data)=>{
            const postObj=data[0];
            setUser(postObj)
        })
    },[userId])

    const navigate=useNavigate()

    
    console.log(user)

    return <div>
        <div className="profile">
        <h3>Profile</h3>
        <section className="user">
        <div>
        <span className="user-info">Name :</span>
        {user.fullName}
      </div>
      <div>
        <span className="user-info">Cohort # :</span>
        {user.cohort}
      </div> <div>
        <span className="user-info"># of Posts :</span>
        {user.posts?.length}
      </div>
      {user.id===currentUser.id &&(
      <button className="btn btn-edit" onClick={()=>{navigate(`/Profile/${user.id}/edit` )}}>Edit Profile</button>)}
    </section>
    </div>
    </div>
}

