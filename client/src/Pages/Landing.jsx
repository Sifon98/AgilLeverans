import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import Men from '../img/Men.png'
import Women from '../img/Women.png'


function Landing() {
  const history = useHistory();
  const { setNav } = useContext(NavContext);

  const gender = (id) => {
    localStorage.setItem("gender", id)
    localStorage.setItem("categoryCheck", false)
    localStorage.setItem("category", 99)
    setNav({path: '/home', direction: 1 })
  }

  return (
    <div className="landing-wrapper page">
      <div className="title-container">
        <h1 className="title">bopshop.</h1>
      </div>
      <div className="image-container">
        <div className="left-side" onClick={ () => gender(0) }>
          <div className="button-container-men" style={{pointerEvents: "none"}}>
            <button className="men-button">men.</button>
          </div>
          <img className="men-image" src={Men} alt="Man"/>
        </div>
        <div className="right-side" onClick={ () => gender(1)}>
          <div className="button-container-women" style={{pointerEvents: "none"}}>
            <button className="women-button">women.</button>
          </div>
          <img className="women-image" src={Women} alt="Woman"/>
        </div>
      </div>
    </div>
  )
}

export default Landing
