import { useRef, useEffect } from 'react';
import DrumAudioData from './DrumAudioData';

const DrumPad = ({ volume, setMessage, powerState, currentBank, clickedPad, setClickedPad }) => {

  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const audioBank = currentBank === 'bankOne' ? DrumAudioData.bankOne : DrumAudioData.bankTwo;

  const handleKeydown = (e) => {
    audioBank.forEach((audio) => {
      if (e.keyCode === audio.keyCode) {
        handleAudio(audio.src, audio.id)
      }
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [currentBank])

  const handleAudio = (src, id) => {
    if (powerState) return
    const audio = new Audio(src)
    audio.volume = volume
    audio.play()
    setMessage(id)
    setClickedPad(id)
  }

  return (
    <div id="drum-pad" className="pads-container">
      {audioBank.map((audio) => (
        <div
          key={audio.keyCode}
          onClick={() => handleAudio(audio.src, audio.id)}
          className={`drum-pad centered ${audio.id === clickedPad ? 'clicked' : ''}`}
          id={audio.keyTrigger}
          disabled={powerState}
        >
          {audio.keyTrigger}
          <audio
            className="clip"
            id={audio.keyTrigger}
            src={audio.src}
            ref={audioRef}
          />
        </div>
      ))}
    </div>
  )
}

export default DrumPad
