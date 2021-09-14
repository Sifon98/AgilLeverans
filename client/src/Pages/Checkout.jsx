import React, { useEffect, useState } from 'react'
import BanksContainer from '../components/Checkout/BanksContainer';
import logo from "../img/logo.png"
import { handleChangeZip } from "../utils/checkout"


function Checkout() {

  // Form 0 (shipping)
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [formCheck0, setFormCheck0] = useState(false);

  // Form 1 (payment)
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpDate] = useState("");



  const [currentForm, setCurrentForm] = useState(0);



  useEffect(() => {
    const validAddress = address.length > 0;
    const validZip = zip.length === 6;
    const validCity = city.length > 0;
    const validCountry = country.length > 0;
    if(validAddress && validZip && validCity && validCountry) {
      setFormCheck0(true);
    } else {
      setFormCheck0(false);
    }
  }, [address, zip, city, country])








  // Utilities
  const handleSetZip = (e) => {
    const ZIP = handleChangeZip(e.target.value, zip);
    if(ZIP === 1) return;
    setZip(ZIP);
  }

  return (
    <div className="checkout-page">
      <div className="header">
        <i className="fas fa-user-circle" onClick={() => history.push("/profile")}></i>
        <img src={logo} />
        <i className="fas fa-shopping-bag"></i>
      </div>
      <h1>checkout.</h1>
      <div className="wrapper">
  
        <div className="form-box box-1" style={currentForm === 0 ? null: {maxHeight: "60px"}}>
          <div className="label-container" onClick={() => setCurrentForm(0)}>
            <div className="number">{currentForm === 0 ? "1" : <i className="fas fa-check"></i>}</div>
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
            onClick={() => setCurrentForm(1)} 
            disabled={!formCheck0}
            style={formCheck0 ? {backgroundColor: "#57c95b"} : null}
            >
            <span>Continue</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="form-box box-2" style={currentForm > 1 ? {maxHeight: "60px"} : null}>
          <div className="hidden-overlay" style={currentForm >= 1 ? {opacity: "0", pointerEvents: "none"} : null}></div>
          <div className="label-container" onClick={() => setCurrentForm(1)}>
            <div className="number">{currentForm <= 1 ? "2" : <i className="fas fa-check"></i>}</div>
            <label>payment method.</label>
          </div>
          <BanksContainer />
          <div className="input-container">
            <div className="section">
              <input className="card-number" type="text" placeholder="card number." />
              <input className="cvc" type="text" placeholder="cvc." maxLength="3" />
            </div>
            <div className="section">
              <input className="name-on-card" type="text" placeholder="name on card." />
              <input className="valid-through" type="text" placeholder="valid through." />
            </div>
          </div>
          <button className="continue-btn" onClick={() => setCurrentForm(2)}>
            <span>Continue</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Checkout
