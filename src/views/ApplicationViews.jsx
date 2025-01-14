import { useEffect } from "react"
import { useState } from "react"
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Posts } from "../components/Posts/Posts";
import { PostDetails } from "../components/Posts/PostDetails";


export const ApplicationViews=()=>{
    const[currentUser, setCurrentUser]=useState({})

    useEffect(()=>{
        const localLearningUser= localStorage.getItem("learning_user")
        const learningUserObject=JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)

    },[])

    return(
        <>
        <Routes>
        <Route
          path="/"
          element={
            <>
            <NavBar/>
            <Outlet/>
            </>
          }>
            <Route path="/"  index element={<Posts />}/>
            <Route path="Posts">
                <Route index element={<Posts />}/>
                <Route path=":postId" element={<PostDetails/>}/>
            </Route>
          {/*<Route path="Profile" element={< />}/>
          <Route path="NewPost" element={< />}/>
          <Route path="MyPosts" element={< />}/>
          <Route path="Favorites" element={< />}/>*/}
          
        </Route>
      </Routes>
        
        </>
    )
}