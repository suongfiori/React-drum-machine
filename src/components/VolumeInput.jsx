
const VolumeInput = ({ volume, onVolumeChange, setMessage, powerState }) => {

  const handleChange = (event) => {
    const newValue = event.target.value;
    onVolumeChange(newValue);
    setMessage(`Volume: ${Math.round(newValue * 100).toString()}`);
    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <div className="volume">
        <input
          type="range"
          className="slider"
          value={volume}
          onChange={handleChange}
          min={0}
          max={1}
          step={0.01}
          disabled={powerState}
        />
    </div>
  )
}

export default VolumeInput
