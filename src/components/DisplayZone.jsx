import ToggleBank from './ToggleBank';
import Display from './Display';
import PowerButton from './PowerButton';

const DisplayZone = ({
  message,
  togglePower,
  toggleState,
  toggleBank,
  powerState
  // setMessage,
  // volume,
  // handleVolumeChange,
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
    </div>
  )
}

export default DisplayZone;
