import React from 'react'

const formNum = 0;

function Form0({currentForm, setCurrentForm, formCheck0, setAddress, zip, handleSetZip, setCity, setCountry}) {
  return (
    <div className="form-box box-1" style={currentForm === formNum ? null: {maxHeight: "60px"}}>
      <div className="label-container" onClick={() => setCurrentForm(formNum)}>
        <div className="number">{currentForm === formNum ? "1" : <i className="fas fa-check"></i>}</div>
        <label>shipping.</label>
      </div>
      <div className="input-container">
        <div className="section">
          <input onChange={(e) => setAddress(e.target.value)} className="address" type="text" placeholder="address." />
          <input value={zip} onChange={handleSetZip} className="zip" type="text" placeholder="zip code." maxLength="6" />
        </div>
        <div className="section">
          <input onChange={(e) => setCity(e.target.value)} className="city" type="text" placeholder="city." />
          <input onChange={(e) => setCountry(e.target.value)} className="country" type="text" placeholder="country." />
        </div>
      </div>
      <button  
        className="continue-btn"
        onClick={() => setCurrentForm(formNum + 1)} 
        disabled={!formCheck0}
        style={formCheck0 ? {backgroundColor: "#57c95b"} : null}
        >
        <span>Continue</span>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Form0
