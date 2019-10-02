import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LoginButton from "./LoginButton";

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
        setDisplayLoginButton={setDisplayLoginButton}
      />
    </nav>
  );
}

/*

  return (
    <header className="navbar App-header row sticky-top">
      <nav className="App-header-navbar">
        <Link
          to="/"
          className="App-header-link navbar-brand"
          onClick={sendHome}
        >
          <h1>DFS App Suites</h1>
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

  */
