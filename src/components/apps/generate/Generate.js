import React, { useState, useEffect } from "react";
import PositionTabs from "./PositionTabs";
import GenerateControlPanel from "./GenerateControlPanel";

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

const dummyGeneratedLineups = {
  lineups: [
    {
      lineup_id: 1,
      players: [
        {
          player_name: "Patrick Mahomes",
          position: "QB",
          team: "KC",
          dk_points: 43.8
        },
        {
          player_name: "Chris Carson",
          position: "RB",
          team: "SEA",
          dk_points: 22.8
        },
        {
          player_name: "Kenyan Drake",
          position: "RB",
          team: "MIA",
          dk_points: 12.9
        },
        {
          player_name: "Mike Evans",
          position: "WR",
          team: "TB",
          dk_points: 32.9
        },
        {
          player_name: "Alson Jeffrey",
          position: "WR",
          team: "PHI",
          dk_points: 18.2
        },
        {
          player_name: "Quincy Enunwa",
          position: "WR",
          team: "NYJ",
          dk_points: 15.9
        },
        {
          player_name: "Travis Kelce",
          position: "TE",
          team: "KC",
          dk_points: 22.1
        },
        {
          player_name: "Austin Ekeler",
          position: "RB",
          team: "LAC",
          dk_points: 18.2
        },
        {
          player_name: "Buccaneers",
          position: "DEF",
          team: "TB",
          dk_points: 15
        }
      ],
      lineup_points: 265.8
    }
  ]
};

export default function Generate(props) {
  const [generateLineups, setGenerateLineups] = useState(false);
  const [playerData, setPlayerData] = useState(dummyPlayerData);
  const [generatedLineupData, setGeneratedLineupData] = useState({});
  //console.log("here");
  //console.log(generatedLineupData);

  useEffect(() => {
    if (generateLineups) {
      setGeneratedLineupData(dummyGeneratedLineups);
    }
    setGenerateLineups(false);
  }, [generateLineups]);
  return (
    <div>
      <GenerateControlPanel setGenerateLineups={setGenerateLineups} />
      <PositionTabs
        playerData={playerData}
        generatedLineupData={generatedLineupData}
      />
    </div>
  );
}
