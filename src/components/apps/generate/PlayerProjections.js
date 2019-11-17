import React from "react";

export default function PlayerProjections(props) {
  //console.log(props);
  //console.log(props.data);
  //   return <div>{props.data}</div>;
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Salary</th>
            <th>Expected Points</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(player => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.dk_salary}</td>
                <td>
                  <input value={player.xdk_points} style={{ width: "50px" }} />
                </td>
                <td>
                  <input value={player.std_dev} style={{ width: "50px" }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
