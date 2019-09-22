import React, { useState } from "react";
import PlayerProjections from "./PlayerProjections";

const playerData = {
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

export default function PositionTabs() {
  const [activeTabData, setActiveTabData] = useState(playerData.QB);

  const clicked = (event, position) => {
    //console.log(activeTabData);
    console.log(event.target);
    setActiveTabData(playerData[position]);
  };

  return (
    <div>
      <ul className="nav nav-tabs app-tabs">
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clicked(e, "QB")}
          >
            QB
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clicked(e, "RB")}
          >
            RB
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clicked(e, "WR")}
          >
            WR
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clicked(e, "TE")}
          >
            TE
          </button>
        </li>
        <li role="presentation" className="nav-item">
          <button
            className="nav-link ds-white-on-blue-nav app-tab"
            onClick={e => clicked(e, "DEF")}
          >
            DEF
          </button>
        </li>
      </ul>
      <PlayerProjections data={activeTabData} />
    </div>
  );
}
