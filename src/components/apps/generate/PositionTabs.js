import React, { useState } from "react";
import PlayerProjections from "./PlayerProjections";

export default function PositionTabs(props) {
  const [activeTabData, setActiveTabData] = useState(props.playerData.QB);
  const [showPlayersData, setShowPlayersData] = useState(true);

  const clickedPosTab = (e, position) => {
    setActiveTabData(props.playerData[position]);
    setShowPlayersData(true);
  };

  const clickedGeneratedLineupsTab = () => {
    setShowPlayersData(false);
  };

  return (
    <div>
      <ul className="nav nav-tabs app-tabs">
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "QB")}
          >
            QB
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "RB")}
          >
            RB
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "WR")}
          >
            WR
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "TE")}
          >
            TE
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "DEF")}
          >
            DEF
          </button>
        </li>
        <li
          role="presentation"
          className="nav-item"
          style={{ paddingLeft: "100px" }}
        >
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={clickedGeneratedLineupsTab}
          >
            GENERATED LINEUPS
          </button>
        </li>
      </ul>
      {showPlayersData ? <PlayerProjections data={activeTabData} /> : null}
    </div>
  );
}
