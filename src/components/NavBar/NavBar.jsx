import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({currentUser}) => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/Posts">
          All Posts
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to={`/Profile/${currentUser.id}`}>
          Profile
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/NewPost">
          New Post
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/Favorites">
          Favorites
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/MyPosts">
          My Posts
        </Link>
      </li>
      {localStorage.getItem("learning_user") ? (
        <li className="navbar-item">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
