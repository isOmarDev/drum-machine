import React from "react";

function generateFakeButtons(data) {
  const {type, numOfDivs, classes} = data
  const buttonOrNumpad = []

  for(let i = 1; i <= numOfDivs; i++) {
    if(type === "numpad" || type === "FakeNumpad") {
      buttonOrNumpad.push(<div key={i} className={`${classes.class}`}>
                            {classes.class === "controls-dashboard-blackBtn" ? <div></div> : null}
                          </div>)
    } else {
      (i%2) 
      ? buttonOrNumpad.push(<div key={i} className={`${classes.class} ${classes.black}`}>
                              {classes.class === "display-fake-button-1" || classes.class === "controls-fake-smallButton" ? <div></div> : null}
                            </div>)
      : buttonOrNumpad.push(<div key={i} className={`${classes.class}`}></div>)
    } 
  }

  return buttonOrNumpad
}

export {generateFakeButtons}