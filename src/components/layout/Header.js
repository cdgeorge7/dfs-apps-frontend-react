import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

export default function Header(props) {
  const sendHome = () => {
    props.setDisplayLoginPage(false);
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-green flex-md-nowrap p-0">
      <Link
        to="/"
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        onClick={sendHome}
      >
        DFS Apps
      </Link>
      <LoginButton
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
        setDisplayLoginPage={props.setDisplayLoginPage}
      />
    </nav>
  );
}
