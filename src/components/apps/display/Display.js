import React from "react";
import DisplayControlPanel from "./DisplayControlPanel";
import DisplayLineups from "./DisplayLineups";

export default function Display() {
  return (
    <div>
      <DisplayControlPanel />
      <DisplayLineups />
    </div>
  );
}
