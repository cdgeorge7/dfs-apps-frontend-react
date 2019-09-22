import React from "react";
import { Link } from "react-router-dom";
import PositionTabs from "./PositionTabs";

export default function GenerateLineups() {
  return (
    <div>
      <div className="card">
        <div className="card-body">Panel Content</div>
      </div>
      <PositionTabs />
    </div>
  );
}
