import VolumeInput from './VolumeInput';
import ToggleBank from './ToggleBank';
import Display from './Display';
import PowerButton from './PowerButton';

const DisplayZone = ({
  message,
  setMessage,
  volume,
  togglePower,
  handleVolumeChange,
  toggleState,
  toggleBank,
  powerState
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
          volume={volume} 
          onVolumeChange={handleVolumeChange} 
          setMessage={setMessage} 
          powerState={powerState}
          disabled={!powerState}
      />
    </div>
  )
}

export default DisplayZone;
