import React, {useState} from "react"
const Context = React.createContext() 

import {bankOne, bankTwo} from "./utilities/banks"

function ContextProvider({children}) {
  const [power, setPower] = useState(false)
  const [isKitChanged, setIsKitChanged] = useState(false)
  const [bankKit, setBankKit] = useState(bankOne)
  const [volumeNum, setVolumeNum] = useState(0.5)
  const [displayVolume, setDisplayVolume] = useState(50)
  const [displayTune, setDisplayTune] = useState("")
  
  // power button click handle
  function powerUp() {
    setPower(!power)
    setDisplayTune(power == false && "")
  }

  // bank kit button click handle
  function changeBankKit() {
    if(power) {
      setIsKitChanged(!isKitChanged)
      setBankKit(isKitChanged ? bankOne : bankTwo)
    }
  }

  // set the volume for the drum machine
  function setVolume(e) {
    const {value} = e.target
    const vol = Math.floor(value * 100)
    setVolumeNum(value)
    setDisplayVolume(vol)
  }

  // play audio of buttons
  function playAudio(keyTrigger, id) {
    if(power) {
      const audiopad = document.getElementById(keyTrigger)
      audiopad.currentTime = 0
      audiopad.play()
      audiopad.volume = volumeNum
      setDisplayTune(id)
    }
  }


  return (
    <Context.Provider 
      value={{power, 
              bankKit, 
              isKitChanged,
              volumeNum,
              displayVolume,
              displayTune, 
              powerUp, 
              changeBankKit, 
              setVolume,
              playAudio}}
    >
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}