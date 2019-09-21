import React from "react";
import { Route } from "react-router-dom";
import SavedLineups from "../apps/SavedLineups";
import DisplayLineups from "../apps/DisplayLineups";
import GenerateLineups from "../apps/GenerateLineups";

export default function AppContent() {
  return (
    <div className="App-appcontent">
      <Route path="/saved" component={SavedLineups} />
      <Route path="/display" component={DisplayLineups} />
      <Route path="/generate" component={GenerateLineups} />
    </div>
  );
}
