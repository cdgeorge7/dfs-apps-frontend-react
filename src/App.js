import React, { useState } from "react";
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav";
import AppContent from "./components/layout/AppContent";
import Home from "./components/layout/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/layout/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(true); //init should be false
  const [displayLoginPage, setDisplayLoginPage] = useState(false);

  //loggedIn ? console.log("logged in") : console.log("logged out");
  const API_URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL;
  console.log(API_URL);

  return (
    <Router>
      <div className="container-fluid">
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setDisplayLoginPage={setDisplayLoginPage}
        />
        {loggedIn ? (
          <div className="row">
            <SideNav />
            <AppContent />
          </div>
        ) : displayLoginPage ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <Home />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
