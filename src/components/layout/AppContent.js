import React from "react";
import { Route } from "react-router-dom";
import SavedLineups from "../apps/saved/SavedLineups";
import DisplayLineups from "../apps/display/DisplayLineups";
import GenerateLineups from "../apps/generate/GenerateLineups";

export default function AppContent() {
  return (
    <div className="App-appcontent">
      <Route path="/saved" component={SavedLineups} />
      <Route path="/display" component={DisplayLineups} />
      <Route path="/generate" component={GenerateLineups} />
    </div>
  );
}
