import React from "react";

import ControlsFakeButtons from "./controls-sub-components/ControlsFakeButtons"
import ControlsDashboard from "./controls-sub-components/ControlsDashboard"
import ControlsDrumpadsAndVolume from "./controls-sub-components/ControlsDrumpadsAndVolume"

function Controls() {
  return (
    <div className="controls">
      <ControlsFakeButtons />
      <ControlsDashboard />
      <ControlsDrumpadsAndVolume />
    </div>
  )
}

export default Controls 