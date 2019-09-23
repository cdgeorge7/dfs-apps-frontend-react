import React from "react";

export default function GeneratedLineupDisplay(props) {
  // check if generatedLineupData object empty
  if (
    Object.entries(props.generatedLineupData).length === 0 &&
    props.generatedLineupData.constructor === Object
  ) {
    return <div>No lineups to display.</div>;
  } else {
    return <div>Lineups</div>;
  }
}
