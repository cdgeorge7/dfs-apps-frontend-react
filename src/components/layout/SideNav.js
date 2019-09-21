import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="App-sidenav">
      <Link to="/saved">Saved Lineups</Link>
      <Link to="/display">Lineup Display</Link>
      <Link to="/generate">Lineup Generator</Link>
    </div>
  );
}
