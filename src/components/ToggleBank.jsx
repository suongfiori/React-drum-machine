const ToggleBank = ({ checked, onChange, powerState }) => {
  return (
    <div className="wrap">
      <span className='bank-label'>Bank</span>
      <section className={`section-toggle ${checked ? 'checked' : ''}`}>
        <input 
          id="toggle-bank" 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          disabled={powerState}
        />
        <label htmlFor="toggle-bank"></label>
      </section>
    </div>
  )
}

export default ToggleBank
