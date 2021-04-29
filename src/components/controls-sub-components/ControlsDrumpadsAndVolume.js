import React, {useContext} from "react";

import {Context} from "../../Context"
import Drumpad from "./Drumpad"

function ControlsDrumpadsAndVolume() {
  const {bankKit, volumeNum, setVolume} = useContext(Context)
  
  const drumpads = bankKit.map((item, i) => (<Drumpad key={item.id} item={item} index={i}/>)) 
  
  return (
    <div className="controls-drumpads-volume">
      <div className="controls-volume">
        <input className="volume-bar" onChange={setVolume} value={volumeNum} type="range" min="0" max="1" step="0.01"/>
      </div>
      <div className="controls-drumpads">
        {drumpads}
      </div>
    </div>
  )
}

export default ControlsDrumpadsAndVolume 
