import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";


function Landing() {
  const history = useHistory();
  const { setNav } = useContext(NavContext);

  return (
    <div className="landingWrapper page">
        <div className="titleContainer">
          <h1 className="title">bopshop.</h1>
        </div>

      <div className="imageContainer">
        <div className="leftSide">
          <div className="buttonContainerMen" style={{pointerEvents: "none"}}>
            <button className="menButton">men.</button>
          </div>
          <img className="menImage" src="./src/img/Men.png" alt="Man" onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 0
            }) }/>
        </div>

        <div className="rightSide">
          <div className="buttonContainerWomen" style={{pointerEvents: "none"}}>
            <button className="womenButton">women.</button>
          </div>
          <img className="womenImage" src="./src/img/Women.png" alt="Woman" onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 1
            }) }/>
        </div>

      </div>
    </div> 
  )
}

export default Landing
