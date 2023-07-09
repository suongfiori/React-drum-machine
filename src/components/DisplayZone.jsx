import ToggleBank from './ToggleBank';
import Display from './Display';
import PowerButton from './PowerButton';
import VolumeInput from './VolumeInput';

const DisplayZone = ({
  message,
  togglePower,
  toggleState,
  toggleBank,
  powerState,
  setMessage,
  volume,
  handleVolumeChange
  
}) => {

  return (
    <div className='display-controls'>
      <Display message={message}/>
      <div className="switches">
        <ToggleBank 
          onChange={toggleBank} 
          powerState={powerState}
          disabled={!powerState}
        />
        <PowerButton
          toggleState={toggleState}        
          powerState={powerState}
          togglePower={togglePower}
        />
      </div>
      <VolumeInput
        setMessage={setMessage}
        volume={volume}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  )
}

export default DisplayZone;
