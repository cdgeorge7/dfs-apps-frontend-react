import React from "react";
import { Route } from "react-router-dom";
import SavedLineups from "../apps/saved/SavedLineups";
import Display from "../apps/display/Display";
import Generate from "../apps/generate/Generate";

export default function AppContent() {
  return (
    <div className="App-appcontent">
      <Route path="/saved" component={SavedLineups} />
      <Route path="/display" component={Display} />
      <Route path="/generate" component={Generate} />
    </div>
  );
}
