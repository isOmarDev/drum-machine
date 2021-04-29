import React, {useContext} from "react";

import {Context} from "../../Context"

function Drumpad({item, index}) {
  const {playAudio} = useContext(Context)

  function handleKeyDown(e) {
    e.key === item.keyTrigger.toLowerCase() ? playAudio(item.keyTrigger, item.id) : null
    console.log(e.key)
  }
  
  return (
    <div onClick={()=>playAudio(item.keyTrigger, item.id)} onKeyDown={handleKeyDown} tabIndex={index + 1}>
      <h3>{item.keyTrigger}</h3>
      <audio src={item.url} id={item.keyTrigger}></audio>
    </div>
  )
}

export default Drumpad