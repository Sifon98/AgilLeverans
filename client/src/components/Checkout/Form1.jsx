import React from 'react'
import BanksContainer from './BanksContainer';

const formNum = 1;

function Form1({currentForm, setCurrentForm, formCheck1, cardNumber, handleSetCardNumber, setCvc, setCardName, expDate, handleSetExpDate}) {
  return (
    <div className="form-box box-2" style={currentForm > formNum ? {maxHeight: "60px"} : null}>
      <div className="hidden-overlay" style={currentForm >= formNum ? {opacity: "0", pointerEvents: "none"} : null}></div>
      <div className="label-container" onClick={() => setCurrentForm(formNum)}>
        <div className="number">{currentForm <= formNum ? "2" : <i className="fas fa-check"></i>}</div>
        <label>payment method.</label>
      </div>
      <BanksContainer />
      <div className="input-container">
        <div className="section">
          <input value={cardNumber} onChange={handleSetCardNumber} className="card-number" type="text" placeholder="card number." />
          <input onChange={(e) => setCvc(e.target.value)} className="cvc" type="text" placeholder="cvc." maxLength="3" />
        </div>
        <div className="section">
          <input onChange={(e) => setCardName(e.target.value)} className="name-on-card" type="text" placeholder="name on card." />
          <input value={expDate} onChange={handleSetExpDate} className="valid-through" type="text" placeholder="valid through." />
        </div>
      </div>
      <button 
        className="continue-btn" 
        onClick={() => setCurrentForm(formNum + 1)}
        disabled={!formCheck1}
        style={formCheck1 ? {backgroundColor: "#57c95b"} : null}
        >
        <span>Continue </span>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Form1
