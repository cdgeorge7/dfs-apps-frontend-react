import React from "react";

export default function ControlPanel() {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <label className="control-panel-label"># of Lineups</label>
          <input type="text" />
        </div>
        <div className="control-panel-button">
          <button className="btn btn-lg btn-info">Generate!</button>
        </div>
      </div>
    </div>
  );
}
