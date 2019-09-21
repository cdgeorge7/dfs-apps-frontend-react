import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

export default function Header(props) {
  const [displayLoginButton, setDisplayLoginButton] = useState(true);

  const fakeLogin = () => {
    if (props.loggedIn) {
      props.setLoggedIn(!props.loggedIn);
      console.log(1);
      return <Redirect to="/" />;
    } else {
      props.setDisplayLoginPage(true);
      setDisplayLoginButton(true); //should be false, true for testing
    }

    // props.setLoggedIn(!props.loggedIn);
  };

  const sendHome = () => {
    props.setDisplayLoginPage(false);
  };

  props.loggedIn
    ? console.log("header logged in")
    : console.log("header logged out");

  return (
    <header className="navbar App-header">
      <nav className="App-header-navbar">
        <Link
          to="/"
          className="App-header-link navbar-brand"
          onClick={sendHome}
        >
          <h1>DFS App Suite</h1>
        </Link>
        {displayLoginButton ? (
          <Link
            to={props.loggedIn ? "/" : "/login"}
            onClick={fakeLogin}
            className="btn btn-primary App-header-login-button"
          >
            {props.loggedIn ? "Log Out" : "Log In"}
          </Link>
        ) : null}
      </nav>
    </header>
  );
}
