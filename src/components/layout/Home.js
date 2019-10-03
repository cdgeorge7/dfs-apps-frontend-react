import React from "react";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <Route path="/" exact>
      <div className="content">
        <div className="">Explainer</div>
        <div className="">Create Account section</div>
      </div>
    </Route>
  );
}
