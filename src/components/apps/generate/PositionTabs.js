import React, { useState, useEffect } from "react";
import PlayerProjections from "./PlayerProjections";
import GeneratedLineupDisplay from "./GeneratedLineupDisplay";

export default function PositionTabs(props) {
  const [activeTabData, setActiveTabData] = useState([]);
  const [showPlayersData, setShowPlayersData] = useState(true);

  const clickedPosTab = (e, position) => {
    setActiveTabData(props.playerData[position]);
    setShowPlayersData(true);
  };

  const clickedGeneratedLineupsTab = () => {
    setShowPlayersData(false);
  };

  useEffect(() => {
    setActiveTabData(props.playerData.QB);
  }, [props.playerData]);

  return (
    <div>
      <ul className="nav nav-tabs app-tabs">
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "QB")}
            style={{ outline: "none" }}
          >
            QB
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "RB")}
            style={{ outline: "none" }}
          >
            RB
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "WR")}
            style={{ outline: "none" }}
          >
            WR
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "TE")}
            style={{ outline: "none" }}
          >
            TE
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "DST")}
            style={{ outline: "none" }}
          >
            DST
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
            style={{ outline: "none" }}
          >
            GENERATED LINEUPS
          </button>
        </li>
      </ul>
      {showPlayersData ? (
        <PlayerProjections data={activeTabData} />
      ) : (
        <GeneratedLineupDisplay
          generatedLineupData={props.generatedLineupData}
        />
      )}
    </div>
  );
}
