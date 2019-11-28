import React, { useState, useEffect } from "react";
import PositionTabs from "./PositionTabs";
import GenerateControlPanel from "./GenerateControlPanel";
import axios from "axios";

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
  const [playerData, setPlayerData] = useState({
    QB: [],
    RB: [],
    WR: [],
    TE: [],
    DST: []
  });
  const [flexLocks, setFlexLocks] = useState({
    RB: 0,
    WR: 0,
    TE: 0
  });
  const [generatedLineupData, setGeneratedLineupData] = useState({});
  const [week, setWeek] = useState("13");
  const [year, setYear] = useState("2019");
  const [error, setError] = useState(false);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  //console.log("here");
  //console.log(generatedLineupData);

  const URL =
    "http://localhost:5001/players/projections" +
    `?week=${week}&year=${year}&projectionName=RotoGrinders_Projections_Full`;

  const transformProjectionData = data => {
    let qb_arr = [];
    let rb_arr = [];
    let wr_arr = [];
    let te_arr = [];
    let dst_arr = [];
    data.players.forEach(player => {
      player["locked"] = false;
      player["active"] = true;
      player["max_allocation"] = 100;
      switch (player.position) {
        case "QB":
          qb_arr.push(player);
          break;
        case "RB":
          rb_arr.push(player);
          break;
        case "WR":
          wr_arr.push(player);
          break;
        case "TE":
          te_arr.push(player);
          break;
        case "DST":
          dst_arr.push(player);
          break;
        default:
          throw new Error("Unknown player position.");
      }
    });
    return {
      QB: qb_arr,
      RB: rb_arr,
      WR: wr_arr,
      TE: te_arr,
      DST: dst_arr
    };
  };

  const fetchProjectionData = async () => {
    await axios
      .get(URL)
      .then(data => {
        //console.log(data);
        setPlayerData(transformProjectionData(data.data));
        setInitialFetchComplete(true);
      })
      .catch(e => {
        setError(true);
      });
  };

  useEffect(() => {
    if (generateLineups) {
      setGeneratedLineupData(dummyGeneratedLineups);
    }
    setGenerateLineups(false);
  }, [generateLineups]);

  useEffect(() => {
    fetchProjectionData();
  }, []);
  return (
    <div>
      <GenerateControlPanel
        setGenerateLineups={setGenerateLineups}
        setWeek={setWeek}
        setYear={setYear}
        playerData={playerData}
      />
      <PositionTabs
        playerData={playerData}
        initialFetchComplete={initialFetchComplete}
        setPlayerData={setPlayerData}
        generatedLineupData={generatedLineupData}
        flexLocks={flexLocks}
        setFlexLocks={setFlexLocks}
      />
    </div>
  );
}
