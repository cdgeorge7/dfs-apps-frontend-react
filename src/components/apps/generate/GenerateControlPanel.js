import React from "react";

export default function GenerateControlPanel(props) {
  const generate = () => props.setGenerateLineups(true);
  return (
    <div className="card w-100 ml-2 mb-2">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label className="control-panel-label mr-2"># of Lineups</label>
            <input type="text" style={{ width: "50px" }} />
          </div>
          <div className="control-panel-button col">
            <button className="btn btn-lg btn-secondary" onClick={generate}>
              Generate!
            </button>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
