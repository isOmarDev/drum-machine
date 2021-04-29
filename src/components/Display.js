import React from "react";

import DisplayFakeControlsOne from "./display-sub-components/DisplayFakeControlsOne"
import DisplayFakeControlsTwo from "./display-sub-components/DisplayFakeControlsTwo"
import DisplayScreen from "./display-sub-components/DisplayScreen"

function Display() {
  return (
    <div className="display">
        <DisplayFakeControlsOne />
        <DisplayFakeControlsTwo />
        <DisplayScreen />
    </div>
  )
}

export default Display 