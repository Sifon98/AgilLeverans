import React, { useEffect, useState } from 'react'

import Form0 from '../components/Checkout/Form0';
import Form1 from '../components/Checkout/Form1';
import Form2 from '../components/Checkout/Form2';
import logo from "../img/logo.png"
import { handleStringModify } from "../utils/checkout"


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
  const [formCheck1, setFormCheck1] = useState(false);

  const [currentForm, setCurrentForm] = useState(0);


  useEffect(() => {
    const validAddress = address.length > 0;
    const validZip = zip.replaceAll(" ", "").length === 5;
    const validCity = city.length > 0;
    const validCountry = country.length > 0;
    if(validAddress && validZip && validCity && validCountry) {
      setFormCheck0(true);
    } else {
      setFormCheck0(false);
    }
  }, [address, zip, city, country])

  useEffect(() => {
    const validCardNumber = cardNumber.replaceAll(" ", "").length === 16;
    const validCvc = cvc.length === 3;
    const validCardName = cardName.length > 0;
    const validExpDate = expDate.replaceAll("-", "").length === 4;
    if(validCardNumber && validCvc && validCardName && validExpDate) {
      setFormCheck1(true);
    } else {
      setFormCheck1(false);
    }
  }, [cardNumber, cvc, cardName, expDate])

  // Utilities
  const handleSetZip = (e) => {
    const ZIP = handleStringModify(e.target.value, zip, 3, null, 5, " ");
    if(ZIP === 1) return;
    setZip(ZIP);
  }

  const handleSetCardNumber = (e) => {
    const VISA = handleStringModify(e.target.value, cardNumber, null, 4, 16, " ");
    if (VISA === 1) return;
    setCardNumber(VISA);
  }

  const handleSetExpDate = (e) => {
    const EXP = handleStringModify(e.target.value, expDate, 2, null, 4, "-");
    if (EXP === 1) return;
    setExpDate(EXP);
  }

  return (
    <div className="checkout-page page">
      <div className="header">
        <i className="fas fa-user-circle" onClick={() => history.push("/profile")}></i>
        <img src={logo} />
        <i className="fas fa-shopping-bag"></i>
      </div>
      <h1>checkout.</h1>
      <div className="wrapper">
        <Form0 
          currentForm={currentForm} 
          setCurrentForm={setCurrentForm} 
          formCheck0={formCheck0} 
          setAddress={setAddress}
          zip={zip}
          handleSetZip={handleSetZip} 
          setCity={setCity} 
          setCountry={setCountry} 
        />
        <Form1 
          currentForm={currentForm} 
          setCurrentForm={setCurrentForm} 
          formCheck1={formCheck1}
          cardNumber={cardNumber}
          handleSetCardNumber={handleSetCardNumber}
          setCvc={setCvc}
          setCardName={setCardName}
          expDate={expDate}
          handleSetExpDate={handleSetExpDate}
        />
        <Form2
          currentForm={currentForm} 
          setCurrentForm={setCurrentForm} 
        />
      </div>
    </div>
  )
}

export default Checkout
