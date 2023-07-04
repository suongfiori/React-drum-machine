
const PowerButton = ({ powerState, toggleState, togglePower }) => {
  return (
  <div className={`wrapper${ toggleState? ' active' : ''}`}>
    <div
      className={`btn ${powerState ? 'active' : ''}`} 
      onClick={togglePower}
    >
      <i className="fa icon-off fa-power-off"></i>
    </div>
  </div>
  )
}

export default PowerButton