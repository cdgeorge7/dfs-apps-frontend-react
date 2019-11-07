import React from "react";
import { NavLink } from "react-router-dom";
//import "../../../node_modules/jquery/dist/jquery.min.js";
//import "../../../node_modules/bootstrap/dist/js/bootstrap";

export default function SideNav() {
  return (
    <aside className="col-12 col-sm-2 p-0">
      <nav className="navbar navbar-expand-sm align-items-start flex-sm-column flex-row p-0">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target=".sidebar"
        >
          <span className="navbar-toggler-icon pl-3"></span>
        </button>
        <div className="collapse navbar-collapse sidebar w-100">
          <ul className="flex-column navbar-nav justify-content-between w-100">
            <li className="nav-item">
              <NavLink to="/saved" className="nav-link sidenav-link pl-3">
                Saved Lineups
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/display" className="nav-link sidenav-link pl-3">
                Lineup Display
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/generate" className="nav-link sidenav-link pl-3">
                Lineup Generator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/evaluator" className="nav-link sidenav-link pl-3">
                DFS Player Evaluator
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

/*
 className="col-1 col-md-2 d-none d-md-block bg-light sidebar-sticky pl-0 pr-0"

  return (
    <div className="App-sidenav">
      <NavLink to="/saved">Saved Lineups</NavLink>
      <NavLink to="/display">Lineup Display</NavLink>
      <NavLink to="/generate">Lineup Generator</NavLink>
    </div>
  );

*/
