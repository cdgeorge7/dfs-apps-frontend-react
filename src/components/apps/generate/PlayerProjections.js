import React from "react";

export default function PlayerProjections(props) {
  //console.log(props.positionLocks);
  //console.log(props.data);
  //   return <div>{props.data}</div>;
  const changeField = (field, posTab, playerId, value) => {
    let playerDataCopy = { ...props.globalPlayerData };
    let playerObj = playerDataCopy[posTab].find(
      player => player.player_id === playerId
    );
    playerObj[field] = parseFloat(value);
    props.setGlobalPlayerData(playerDataCopy);
  };

  const lockPlayer = (posTab, playerId) => {
    let playerDataCopy = { ...props.globalPlayerData };
    let playerObj = playerDataCopy[posTab].find(
      player => player.player_id === playerId
    );
    if (!playerObj.active) {
      return;
    }
    let change = playerObj.locked ? -1 : 1;
    playerObj.locked = !playerObj.locked;
    if (posTab === "QB" || posTab === "DST") {
      playerDataCopy[posTab].forEach(player => {
        if (player.player_id !== playerId) {
          if (playerObj.locked) {
            player.active = false;
          } else {
            player.active = true;
          }
        }
      });
    } else {
      if (props.flexLocks.RB + props.flexLocks.WR + props.flexLocks.TE === 6) {
        console.log("yo");
        playerDataCopy["RB"].forEach(player => {
          if (player.player_id !== playerId && !player.locked) {
            if (playerObj.locked) {
              player.active = false;
            } else {
              player.active = true;
            }
          }
        });
        playerDataCopy["WR"].forEach(player => {
          if (player.player_id !== playerId && !player.locked) {
            if (playerObj.locked) {
              player.active = false;
            } else {
              player.active = true;
            }
          }
        });
        playerDataCopy["TE"].forEach(player => {
          if (player.player_id !== playerId && !player.locked) {
            if (playerObj.locked) {
              player.active = false;
            } else {
              player.active = true;
            }
          }
        });
      } else if (posTab === "RB") {
        if (
          props.flexLocks["RB"] >= 2 ||
          (props.flexLocks["RB"] === 1 &&
            (props.flexLocks["WR"] === 4 || props.flexLocks["TE"] === 2))
        ) {
          playerDataCopy["RB"].forEach(player => {
            if (player.player_id !== playerId && !player.locked) {
              if (playerObj.locked) {
                player.active = false;
              } else {
                player.active = true;
              }
            }
          });
          if (!playerObj.locked) {
            playerDataCopy["WR"].forEach(player => {
              player.active = true;
            });
            playerDataCopy["TE"].forEach(player => {
              player.active = true;
            });
          }
        }
      } else if (posTab === "WR") {
        if (
          props.flexLocks["WR"] >= 3 ||
          (props.flexLocks["WR"] === 2 &&
            (props.flexLocks["RB"] === 3 || props.flexLocks["TE"] === 2))
        ) {
          playerDataCopy["WR"].forEach(player => {
            if (player.player_id !== playerId && !player.locked) {
              if (playerObj.locked) {
                player.active = false;
              } else {
                player.active = true;
              }
            }
          });
          if (!playerObj.locked) {
            playerDataCopy["RB"].forEach(player => {
              player.active = true;
            });
            playerDataCopy["TE"].forEach(player => {
              player.active = true;
            });
          }
        }
      } else {
        if (
          props.flexLocks["TE"] >= 1 ||
          props.flexLocks["RB"] === 3 ||
          props.flexLocks["WR"] === 4
        ) {
          playerDataCopy["TE"].forEach(player => {
            if (player.player_id !== playerId && !player.locked) {
              if (playerObj.locked) {
                player.active = false;
              } else {
                player.active = true;
              }
            }
          });
          if (!playerObj.locked) {
            playerDataCopy["WR"].forEach(player => {
              player.active = true;
            });
            playerDataCopy["RB"].forEach(player => {
              player.active = true;
            });
          }
        }
      }

      props.setFlexLocks({
        ...props.flexLocks,
        [posTab]: props.flexLocks[posTab] + change
      });
    }

    props.setGlobalPlayerData(playerDataCopy);
  };

  return (
    <div
      //className="table-responsive table-fixed-header"
      style={{ height: "350px", width: "100%" }}
    >
      <table className="table table-striped table-sm table-fixed">
        <thead>
          <tr>
            <th className="lock-width"></th>
            <th className="player-width">Player</th>
            <th className="team-width">Team</th>
            <th className="salary-width">Salary</th>
            <th className="x-points-width">Expected Points</th>
            <th className="std-dev-width">Standard Deviation</th>
            <th className="max-all-width">Max (%) Allocation</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(player => {
            return (
              <tr
                key={player.player_id}
                style={{ opacity: !player.active ? 0.6 : 1 }}
              >
                <td
                  className="lock-width"
                  data-id={player.player_id}
                  onClick={e =>
                    lockPlayer(
                      props.activeTabPosition,
                      parseInt(e.target.getAttribute("data-id"))
                    )
                  }
                  style={{ cursor: player.active ? "pointer" : null }}
                >
                  {player.locked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      width="25px"
                      viewBox="0 0 8 8"
                      data-id={player.player_id}
                    >
                      <path
                        d="m1 0c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1v-6c0-.554-.446-1-1-1h-6m3 1.125c.969 0 1.758.787 1.758 1.756v.715c.138.029.242.152.242.299v2.676c0 .168-.136.305-.305.305h-3.391c-.169 0-.305-.136-.305-.305v-2.676c0-.147.104-.27.242-.299v-.715c0-.969.789-1.756 1.758-1.756m0 .611c-.632 0-1.146.513-1.146 1.145v.709h2.293v-.709c0-.632-.515-1.145-1.146-1.145m0 2.793c-.237 0-.43.191-.43.428 0 .126.055.238.141.316l-.113.604c-.006.034.015.059.049.059h.715c.034 0 .055-.025.049-.059l-.115-.609c.082-.078.135-.188.135-.311 0-.237-.193-.428-.43-.428"
                        fill="green"
                        data-id={player.player_id}
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      width="25px"
                      viewBox="0 0 8 8"
                      data-id={player.player_id}
                    >
                      <path
                        d="m1 0c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1v-6c0-.554-.446-1-1-1h-6m3 1.125c.791 0 1.488.532 1.695 1.295.044.163-.052.331-.215.375-.163.044-.331-.052-.375-.215-.135-.497-.59-.844-1.105-.844-.632 0-1.146.513-1.146 1.145v.709h2.842c.169 0 .305.136.305.305v2.676c0 .169-.136.305-.305.305h-3.391c-.169 0-.305-.136-.305-.305v-2.676c0-.147.104-.27.242-.299v-.715c0-.969.789-1.756 1.758-1.756m0 3.404c-.237 0-.43.191-.43.428 0 .126.055.238.141.316l-.113.604c-.006.033.015.059.049.059h.715c.034 0 .055-.026.049-.059l-.115-.609c.082-.078.135-.188.135-.311 0-.237-.193-.428-.43-.428"
                        fill="#4d4d4d"
                        data-id={player.player_id}
                      />
                    </svg>
                  )}
                </td>
                <td className="player-width">{player.name}</td>
                <td className="team-width">{player.team}</td>
                <td className="salary-width">{player.dk_salary}</td>
                <td className="x-points-width">
                  <input
                    defaultValue={player.xdk_points}
                    style={{ width: "50px" }}
                    data-id={player.player_id}
                    onChange={e =>
                      changeField(
                        "xdk_points",
                        props.activeTabPosition,
                        parseInt(e.target.getAttribute("data-id")),
                        e.target.value
                      )
                    }
                    readOnly={!player.active ? "readonly" : null}
                  />
                </td>
                <td className="std-dev-width">
                  <input
                    defaultValue={player.std_dev}
                    style={{ width: "50px" }}
                    data-id={player.player_id}
                    onChange={e =>
                      changeField(
                        "std_dev",
                        props.activeTabPosition,
                        parseInt(e.target.getAttribute("data-id")),
                        e.target.value
                      )
                    }
                    readOnly={!player.active ? "readonly" : null}
                  />
                </td>
                <td className="max-all-width">
                  <input
                    defaultValue={player.max_allocation}
                    style={{ width: "50px" }}
                    data-id={player.player_id}
                    onChange={e =>
                      changeField(
                        "max_allocation",
                        props.activeTabPosition,
                        parseInt(e.target.getAttribute("data-id")),
                        e.target.value
                      )
                    }
                    readOnly={!player.active ? "readonly" : null}
                  />
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
