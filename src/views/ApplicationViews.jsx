import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Posts } from "../components/Posts/Posts";
import { PostDetails } from "../components/Posts/PostDetails";
import { NewPost } from "../components/forms/NewPost";
import { MyPostList } from "../components/Posts/MyPostList";
import { EditPost } from "../components/forms/EditPost";
import { Favorites } from "../components/Posts/Favorites";
import { UserProfile } from "../components/Profiles/UserProfile";
import { EditProfile } from "../components/forms/EditProfile";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar currentUser={currentUser}/>
              <Outlet />
            </>
          }
        >
          <Route path="/" index element={<Posts />} />
          <Route path="Posts">
            <Route index element={<Posts />} />
            <Route
              path=":postId"
              element={<PostDetails currentUser={currentUser} />}
            />
            <Route path=":postId/edit" element={<EditPost currentUser={currentUser}/>}/>
          </Route>
          <Route
            path="NewPost"
            element={<NewPost currentUser={currentUser} />}
          />
          <Route path="MyPosts" element={<MyPostList  currentUser={currentUser} />}/>
          <Route path="Favorites" element={<Favorites currentUser={currentUser}/>}/>
          <Route path="Profile"> 
            <Route index element={<UserProfile currentUser={currentUser}/>}/>
            <Route
              path=":userId"
              element={<UserProfile currentUser={currentUser} />}
            />
            <Route path=":userId/edit" element={<EditProfile currentUser={currentUser}/>}/>
          
          </Route>
          
        </Route>
      </Routes>
    </>
  );
};
