import { useState, useEffect } from 'react';
import DrumPad from './components/DrumPad';
import DisplayZone from './components/DisplayZone';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  
  const [powerState, setPowerState] = useState(false)
  const [toggleState, setToggleState] = useState(false)
  const [bank, setBank] = useState('bankOne')
  const [volume, setVolume] = useState(0.3)
  const [message, setMessage] = useState("")
  const [clickedPad, setClickedPad] = useState(null)

  useEffect(() => {
    // Set initial power state to "on" when the page loads
    setPowerState(false)
  }, [])

  const handleVolumeChange = (value) => {
    setVolume(value)
  }

  const togglePower = () => {
    if (!powerState) {
      setMessage("")
      setToggleState(false)
    }
    setPowerState(!powerState)
  }

  const toggleBank = () => {
    const newBank = bank === 'bankOne' ? 'bankTwo' : 'bankOne'
    setBank(newBank)
    if (!powerState) {
      const newBankTitle = newBank === 'bankOne' ? 'Heater Kit' : 'Smooth Piano Kit'
      setMessage(newBankTitle)
    }
  }

  return (
    <>
    <div id="drum-machine"className="container" >
      <DisplayZone
        message={message}
        setMessage={setMessage}
        volume={volume}
        togglePower={togglePower}
        powerState={powerState}
        handleVolumeChange={handleVolumeChange}
        toggleState={toggleState}
        toggleBank={toggleBank}
      />
      <DrumPad
        setMessage={setMessage}
        volume={volume}
        powerState={powerState}
        currentBank={bank}
        clickedPad={clickedPad}
        setClickedPad={setClickedPad}
      />
     
    </div>
     <Footer />
     </>
  )
}

export default App
