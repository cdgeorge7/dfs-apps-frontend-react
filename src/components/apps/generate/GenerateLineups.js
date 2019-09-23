import React, { useState } from "react";
import { Link } from "react-router-dom";
import PositionTabs from "./PositionTabs";
import ControlPanel from "./ControlPanel";

const dummyPlayerData = {
  QB: [
    { id: 1, name: "mahomes", salary: 7600, proj_points: 33.4 },
    { id: 2, name: "jackson", salary: 7000, proj_points: 20.4 },
    { id: 3, name: "brady", salary: 6500, proj_points: 18.4 }
  ],
  RB: [
    { id: 4, name: "mccoy", salary: 7600, proj_points: 33.4 },
    { id: 5, name: "ingram", salary: 7000, proj_points: 20.4 },
    { id: 6, name: "kamara", salary: 6500, proj_points: 18.4 }
  ],
  WR: [
    { id: 7, name: "watkins", salary: 7600, proj_points: 33.4 },
    { id: 8, name: "brown", salary: 7000, proj_points: 20.4 },
    { id: 9, name: "jones", salary: 6500, proj_points: 18.4 }
  ],
  TE: [
    { id: 10, name: "kelce", salary: 7600, proj_points: 33.4 },
    { id: 11, name: "ertz", salary: 7000, proj_points: 20.4 },
    { id: 12, name: "cook", salary: 6500, proj_points: 18.4 }
  ],
  DEF: [
    { id: 13, name: "kc", salary: 7600, proj_points: 33.4 },
    { id: 14, name: "ne", salary: 7000, proj_points: 20.4 },
    { id: 15, name: "no", salary: 6500, proj_points: 18.4 }
  ]
};

export default function GenerateLineups(props) {
  const [viewState, setViewState] = useState({
    initialView: true,
    generatingView: false,
    completeView: false
  });
  const [playerData, setPlayerData] = useState(dummyPlayerData);
  return (
    <div>
      <ControlPanel />
      {viewState.initialView ? (
        <PositionTabs playerData={playerData} />
      ) : viewState.generatingView ? (
        <div>generating</div>
      ) : (
        <div>complete</div>
      )}
    </div>
  );
}
