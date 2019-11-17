import React from "react";

export default function PlayerProjections(props) {
  //console.log(props);
  //console.log(props.data);
  //   return <div>{props.data}</div>;
  return (
    <div
      className="table-responsive table-fixed-header"
      style={{ height: "350px", width: "100%" }}
    >
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "20%" }}>Player</th>
            <th style={{ width: "5%" }}>Team</th>
            <th style={{ width: "5%" }}>Salary</th>
            <th style={{ width: "5%" }}>Expected Points</th>
            <th style={{ width: "10%" }}>Standard Deviation</th>
            <th style={{ width: "50%" }}></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(player => {
            return (
              <tr key={player.player_id}>
                <td
                  id={player.player_id}
                  onClick={e => console.log(e.target.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    width="25px"
                    viewBox="0 0 8 8"
                    id={player.player_id}
                  >
                    <path
                      d="m1 0c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1v-6c0-.554-.446-1-1-1h-6m3 1.125c.791 0 1.488.532 1.695 1.295.044.163-.052.331-.215.375-.163.044-.331-.052-.375-.215-.135-.497-.59-.844-1.105-.844-.632 0-1.146.513-1.146 1.145v.709h2.842c.169 0 .305.136.305.305v2.676c0 .169-.136.305-.305.305h-3.391c-.169 0-.305-.136-.305-.305v-2.676c0-.147.104-.27.242-.299v-.715c0-.969.789-1.756 1.758-1.756m0 3.404c-.237 0-.43.191-.43.428 0 .126.055.238.141.316l-.113.604c-.006.033.015.059.049.059h.715c.034 0 .055-.026.049-.059l-.115-.609c.082-.078.135-.188.135-.311 0-.237-.193-.428-.43-.428"
                      fill="#4d4d4d"
                      id={player.player_id}
                    />
                  </svg>
                </td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.dk_salary}</td>
                <td>
                  <input value={player.xdk_points} style={{ width: "50px" }} />
                </td>
                <td>
                  <input value={player.std_dev} style={{ width: "50px" }} />
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
