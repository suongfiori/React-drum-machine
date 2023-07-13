import { useState, useEffect } from 'react';
import DrumPad from './components/DrumPad';
import DisplayZone from './components/DisplayZone';
import Footer from './components/Footer';
import './styles/styles.css'

const App = () => {
  
  const [powerState, setPowerState] = useState(false)
  const [toggleState, setToggleState] = useState(false)
  const [bank, setBank] = useState('bankOne')
  const [volume, setVolume] = useState(0.3)
  const [message, setMessage] = useState("")
  const [clickedPad, setClickedPad] = useState(null)
  const [selectedTheme, setSelectedTheme] = useState('theme-orange')

  useEffect(() => {
    // Set initial power state to "on" when the page loads
    setPowerState(false)
  }, [])

  useEffect (() => {
    const currentThemeColor = localStorage.getItem('theme-color')
    if (currentThemeColor) {
      setSelectedTheme(currentThemeColor)
    }
  }, [])

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
    localStorage.setItem('theme-color', theme)
  }

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
    <div className={`App ${selectedTheme}`}>

      <div className="theme-options">
        <div id="theme-orange"
          onClick={() => handleThemeChange('theme-orange')}
          className={`${selectedTheme === "theme-orange" ? "active" : ""}`} 
        />
        <div id="theme-purple"
          onClick={() => handleThemeChange('theme-purple')}
          className={`${selectedTheme === "theme-purple" ? "active" : ""}`} 
        />
        <div id="theme-mint"
          onClick={() => handleThemeChange('theme-default')}
          className={`${selectedTheme === "theme-mint" ? "active" : ""}`} 
        />
        <div id="theme-peach"
          onClick={() => handleThemeChange('theme-peach')}
          className={`${selectedTheme === "theme-peach" ? "active" : ""}`} 
        />
      </div>

      <div id="drum-machine" className="content-box" >
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
      
    </div>
  )
}

export default App
