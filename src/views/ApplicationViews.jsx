import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Posts } from "../components/Posts/Posts";
import { PostDetails } from "../components/Posts/PostDetails";
import { NewPost } from "../components/forms/NewPost";
import { MyPostList } from "../components/Posts/MyPostList";

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
              <NavBar />
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
          </Route>
          <Route
            path="NewPost"
            element={<NewPost currentUser={currentUser} />}
          />
          <Route path="MyPosts" element={<MyPostList   currentUser={currentUser}/>}/>
          {/*<Route path="Profile" element={< />}/>
          
          
          <Route path="Favorites" element={< />}/>*/}
        </Route>
      </Routes>
    </>
  );
};
