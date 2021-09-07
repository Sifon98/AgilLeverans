import React from 'react'
import Home from './Home'
import { useHistory } from "react-router-dom";


function Landing() {
  const history = useHistory()
  return (
    <div className="wrapper">
        <div className="titleContainer">
          <h1 onClick={() => history.push("/Home")} className="title">bopshop.</h1>
        </div>

      <div className="imageContainer">
        <div className="leftSide">
          <img className="menImage" src="./src/Men.png" alt="Men" />
        </div>

        <div className="rightSide">
          <img className="womenImage" src="./src/Women.png" alt="Women" />
        </div>
      </div>
    </div>
  )
}

export default Landing
