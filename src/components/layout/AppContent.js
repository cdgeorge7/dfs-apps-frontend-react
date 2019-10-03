import React from "react";
import { Route } from "react-router-dom";
import SavedLineups from "../apps/saved/SavedLineups";
import Display from "../apps/display/Display";
import Generate from "../apps/generate/Generate";

export default function AppContent() {
  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4s app-content-bg">
      <Route path="/saved" component={SavedLineups} />
      <Route path="/display" component={Display} />
      <Route path="/generate" component={Generate} />
    </main>
  );
}
