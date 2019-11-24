import React, { useState, useEffect } from "react";
import PlayerProjections from "./PlayerProjections";
import GeneratedLineupDisplay from "./GeneratedLineupDisplay";

export default function PositionTabs(props) {
  const [activeTabData, setActiveTabData] = useState([]);
  const [activeTabPosition, setActiveTabPosition] = useState("");
  const [showPlayersData, setShowPlayersData] = useState(true);

  const ACTIVE_COLOR = "#b3aead";

  const clickedPosTab = (e, position) => {
    setActiveTabData(
      props.playerData[position].sort((a, b) => {
        return parseFloat(a["xdk_points"]) < parseFloat(b["xdk_points"])
          ? 1
          : -1;
      })
    );
    setActiveTabPosition(position);
    setShowPlayersData(true);
  };

  const clickedGeneratedLineupsTab = () => {
    setShowPlayersData(false);
    setActiveTabPosition("GEN");
  };

  useEffect(() => {
    setActiveTabData(
      props.playerData.QB.sort((a, b) => {
        return parseFloat(a["xdk_points"]) < parseFloat(b["xdk_points"])
          ? 1
          : -1;
      })
    );
    setActiveTabPosition("QB");
  }, [props.initialFetchComplete]);

  //console.log(props.playerData);
  return (
    <div>
      <ul className="nav nav-tabs app-tabs">
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "QB")}
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "QB" ? ACTIVE_COLOR : null
            }}
          >
            QB
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "RB")}
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "RB" ? ACTIVE_COLOR : null
            }}
          >
            RB
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "WR")}
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "WR" ? ACTIVE_COLOR : null
            }}
          >
            WR
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "TE")}
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "TE" ? ACTIVE_COLOR : null
            }}
          >
            TE
          </button>
        </li>
        <li role="presentation" className="nav-item pr-1">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clickedPosTab(e, "DST")}
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "DST" ? ACTIVE_COLOR : null
            }}
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
            style={{
              outline: "none",
              backgroundColor: activeTabPosition === "GEN" ? ACTIVE_COLOR : null
            }}
          >
            GENERATED LINEUPS
          </button>
        </li>
      </ul>
      {showPlayersData ? (
        <PlayerProjections
          data={activeTabData}
          globalPlayerData={props.playerData}
          setGlobalPlayerData={props.setPlayerData}
          activeTabPosition={activeTabPosition}
          flexLocks={props.flexLocks}
          setFlexLocks={props.setFlexLocks}
        />
      ) : (
        <GeneratedLineupDisplay
          generatedLineupData={props.generatedLineupData}
        />
      )}
    </div>
  );
}
