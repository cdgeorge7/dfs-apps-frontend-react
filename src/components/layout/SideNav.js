import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="App-sidenav">
      <NavLink to="/saved">Saved Lineups</NavLink>
      <NavLink to="/display">Lineup Display</NavLink>
      <NavLink to="/generate">Lineup Generator</NavLink>
    </div>
  );
}
