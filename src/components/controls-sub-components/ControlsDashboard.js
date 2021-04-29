import React, {useContext} from "react";

import {Context} from "../../Context"
import {generateFakeButtons} from "../../utilities/fakeButtons"

function ControlsDashboard() {
  const {power, isKitChanged, changeBankKit, powerUp} = useContext(Context)

  const numpad = {type: "numpad", numOfDivs: 3, classes: {class: "controls-dashboard-blackBtn"}}

  return (
    <div className="controls-dashboard">
      <div className="controls-dashboard-blackBtns">
        {generateFakeButtons(numpad)}
      </div>
      <div className="controls-dashboard-powerBtn" onClick={powerUp}>
        <img style={{width: "17px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJYTUxJRF8xNV8iPgoJPHBhdGggaWQ9IlhNTElEXzE2XyIgZD0iTTIyMS43NDIsNDYuOTA2Yy03LjI4LTMuOTU0LTE2LjM4Ny0xLjI1OS0yMC4zNDEsNi4wMjFjLTMuOTU1LDcuMjc5LTEuMjU5LDE2LjM4Niw2LjAyLDIwLjM0MSAgIEMyNDIuOTM3LDkyLjU2MSwyNjUsMTI5LjYyNiwyNjUsMTcwYzAsNjAuNjU0LTQ5LjM0NiwxMTAtMTEwLDExMFM0NSwyMzAuNjU0LDQ1LDE3MGMwLTQwLjE5OCwyMS45MjEtNzcuMTg2LDU3LjIwOC05Ni41MzEgICBjNy4yNjUtMy45ODIsOS45MjUtMTMuMSw1Ljk0My0yMC4zNjRjLTMuOTgzLTcuMjY0LTEzLjEwMS05LjkyNS0yMC4zNjQtNS45NDNDNDIuODkxLDcxLjc3NSwxNSwxMTguODQ0LDE1LDE3MCAgIGMwLDc3LjE5Niw2Mi44MDQsMTQwLDE0MCwxNDBzMTQwLTYyLjgwNCwxNDAtMTQwQzI5NSwxMTguNjIsMjY2LjkyOSw3MS40NTMsMjIxLjc0Miw0Ni45MDZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBpZD0iWE1MSURfMTdfIiBkPSJNMTU1LDEzMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjE1YzAtOC4yODQtNi43MTYtMTUtMTUtMTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2MTAwICAgQzE0MCwxMjMuMjg0LDE0Ni43MTYsMTMwLDE1NSwxMzB6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
      </div>
      <div className="controls-dashboard-tuneChanger" onClick={changeBankKit}>
        <h5>{isKitChanged && power ? "Kit 2" : "Kit 1"}</h5>
      </div>
      <div className="controls-dashboard-blackAndWhiteBtn"></div>
      <div className="controls-dashboard-blackAndWhiteBtn"></div>
      <div className="controls-dashboard-blackAndWhiteBtn"></div>
      <div className="controls-dashboard-blackAndWhiteBtn"></div>
    </div>
  )
}

export default ControlsDashboard 
