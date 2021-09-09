import React from 'react'
import { useHistory } from "react-router-dom";


function Landing() {
  const history = useHistory()
  return (
    <div className="wrapper">
        <div className="titleContainer">
          <h1 onClick={ () => history.push("/") } className="title">bopshop.</h1>
        </div>

      <div className="imageContainer">
        <div className="leftSide">
          <div className="buttonContainerMen">
            <button onClick ={ () => history.push("/") } className="menButton">men.</button>
          </div>
          <img className="menImage" src="./src/Men.png" alt="Man" />
        </div>

        <div className="rightSide">
          <div className="buttonContainerWomen">
            <button onClick={ () => history.push("/") }  className="womenButton">women.</button>
          </div>
          <img className="womenImage" src="./src/Women.png" alt="Woman" />
        </div>

      </div>
    </div>
  )
}

export default Landing
