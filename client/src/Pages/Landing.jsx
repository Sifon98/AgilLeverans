import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import Men from '../img/Men.png'
import Women from '../img/Women.png'


function Landing() {
  const history = useHistory();
  const { setNav } = useContext(NavContext);

  return (
    <div className="landingWrapper page">
      <div className="titleContainer">
        <h1 className="title">bopshop.</h1>
      </div>
      <div className="imageContainer">
        <div className="leftSide" onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 0
            }) }>
          <div className="buttonContainerMen" style={{pointerEvents: "none"}}>
            <button className="menButton">men.</button>
          </div>
          <img className="menImage" src="./src/img/Men.png" alt="Man" />
        </div>
        <div className="rightSide"  onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 1
            }) }>
          <div className="buttonContainerWomen" style={{pointerEvents: "none"}}>
            <button className="womenButton">women.</button>
          </div>
          <img className="womenImage" src="./src/img/Women.png" alt="Woman"/>
        </div>
      </div>
    </div>
  )
}

export default Landing
