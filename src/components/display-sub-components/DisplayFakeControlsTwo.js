import React from "react";
import {generateFakeButtons} from "../../utilities/fakeButtons"

function DisplayFakeControlsTwo() {
  
  // Type of fake buttons
  const fakeBtn = {type: "FakeButton", numOfDivs: 3, classes: {class: "display-fake-button-2", black: "black"}}
  const fakeNumpad = {type: "FakeNumpad", numOfDivs: 10, classes: {class: "numpad"}}

  return (
    <div className="display-fake-controls-2">
      <div className="display-fake-buttons-2">
        {/* 3 <div key={i} className="display-fake-button-2 black"></div>
              <div key={i} className="display-fake-button-1"></div>*/}
        {generateFakeButtons(fakeBtn)} 
      </div>
      
      <div className="display-fake-numpad">
        {/* 10 <div key={i} className="numpad"></div> */}
        {generateFakeButtons(fakeNumpad)}
      </div>
    </div>
  )
}

export default DisplayFakeControlsTwo 
