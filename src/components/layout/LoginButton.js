import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function LoginButton(props) {
  const fakeLogin = () => {
    if (props.loggedIn) {
      props.setLoggedIn(!props.loggedIn);
      props.setDisplayLoginPage(false);
      return <Redirect to="/" />;
    } else {
      props.setDisplayLoginPage(true);
      return <Redirect to="/login" />;
    }
  };

  return (
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <Link
          to={props.loggedIn ? "/" : "/login"}
          onClick={fakeLogin}
          className="btn nav-link"
        >
          {props.loggedIn ? "Log Out" : "Log In"}
        </Link>
      </li>
    </ul>
  );
}
