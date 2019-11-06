import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar-sticky pl-0 pr-0">
      <NavLink to="/saved" className="nav-link sidenav-link w-100">
        Saved Lineups
      </NavLink>
      <NavLink to="/display" className="nav-link sidenav-link w-100">
        Lineup Display
      </NavLink>
      <NavLink to="/generate" className="nav-link sidenav-link w-100">
        Lineup Generator
      </NavLink>
      <NavLink to="/evaluator" className="nav-link sidenav-link w-100">
        DFS Player Evaluator
      </NavLink>
    </nav>
  );
}

/*


  return (
    <div className="App-sidenav">
      <NavLink to="/saved">Saved Lineups</NavLink>
      <NavLink to="/display">Lineup Display</NavLink>
      <NavLink to="/generate">Lineup Generator</NavLink>
    </div>
  );

*/
