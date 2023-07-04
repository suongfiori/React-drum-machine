const Display = ({ message }) => {
  return (
    <div id="display" className={`display centered ${message.length===0 ? "empty" : ""}`}>
      <p>
        {message.length === 0 ? 'Drum Machine' : message}
      </p>
    </div>
  )
}

export default Display