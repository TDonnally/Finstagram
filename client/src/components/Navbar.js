import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const [state, dispatch] = useContext(UserContext);
  const history = useHistory();
  const renderList = () => {
    if (state) {
      return [
        <li key="profile">
          <Link to="profile">Profile</Link>
        </li>,
        <li key="create">
          <Link to="create">Create Post</Link>
        </li>,
        <li key="logout">
          <button
            className="btn waves-effect waves-light #64b5f6 blue lighten-2"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="signin">
          <Link to="/signin">Sign in</Link>
        </li>,
        <li key="signup">
          <Link to="/signup">Sign up</Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Finstagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
