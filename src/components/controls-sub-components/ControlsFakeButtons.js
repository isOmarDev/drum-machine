import React, {useContext} from "react";

import {Context} from "../../Context"
import {generateFakeButtons} from "../../utilities/fakeButtons"

function ControlsFakeButtons() {
  const {power} = useContext(Context)

  // Type of fake buttons
  const fakeBtn = {type: "FakeButton", numOfDivs: 10, classes: {class: "controls-fake-smallButton", black: "black"}}

  return (
    <div className="controls-fake-buttons">
      <div className="controls-fake-bigButton">
        <div style={power ? {animation: " glowing 1500ms infinite", animationDelay: "100ms"}: null}>
          <h3>{power ? "On" : "Off"}</h3>
        </div>
      </div>
      {generateFakeButtons(fakeBtn)}
    </div>
  )
}

export default ControlsFakeButtons 
