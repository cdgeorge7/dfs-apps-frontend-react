import React from "react";
import WeekYearDropdown from "./WeekYearDropdown";

export default function SavedControlPanel(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <WeekYearDropdown />
            </div>
            <div className="col-2">B</div>
            <div className="col">C</div>
          </div>
          <div className="row">
            <div className="col-6">A</div>
            <div className="col">B</div>
            <div className="col">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
