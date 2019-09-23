import React from "react";

export default function PlayerProjections(props) {
  console.log(props);
  console.log(props.data);
  //   return <div>{props.data}</div>;
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Players</th>
            <th>Salary</th>
            <th>Projected Points</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(player => {
            return (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.salary}</td>
                <td>
                  <input defaultValue={player.proj_points} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
