import React, { useEffect, useState } from 'react'
import BanksContainer from '../components/Checkout/BanksContainer';
import logo from "../img/logo.png"
import { handleChangeZip } from "../utils/checkout"


function Checkout() {

  const [zip, setZip] = useState("");


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
  
        <div className="form-box">
          <div className="label-container">
            <div className="number">1</div>
            <label>shipping.</label>
          </div>
          <div className="input-container">
            <div className="section">
              <input className="address" type="text" placeholder="address." />
              <input value={zip} onChange={handleSetZip} className="zip" type="text" placeholder="zip code." maxLength="6" />
            </div>
            <div className="section">
              <input className="city" type="text" placeholder="city." />
              <input className="country" type="text" placeholder="country." />
            </div>
          </div>
          <button className="continue-btn">
            <span>Continue</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="form-box">
          <div className="hidden-overlay"></div>
          <div className="label-container">
            <div className="number">2</div>
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
          <button className="continue-btn">
            <span>Continue</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Checkout
