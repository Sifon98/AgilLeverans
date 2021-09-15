import React from 'react'
import { useHistory } from "react-router-dom";


function Landing() {
  const history = useHistory()
  return (
    <div className="landingWrapper">
        <div className="titleContainer">
          <h1 onClick={ () => history.push("/") } className="title">bopshop.</h1>
        </div>

      <div className="imageContainer">
        <div className="leftSide">
          <div className="buttonContainerMen">
            <button onClick ={ () => history.push({
                pathname: '/home',
                state: 0
            }) } className="menButton">men.</button>
          </div>
          <img className="menImage" src="./src/img/Men.png" alt="Man" onClick={ () => history.push({
                pathname: '/home',
                state: 0
            }) }/>
        </div>

        <div className="rightSide">
          <div className="buttonContainerWomen">
            <button onClick={ () => history.push({
                pathname: '/home',
                state: 1
            }) }  className="womenButton">women.</button>
          </div>
          <img className="womenImage" src="./src/img/Women.png" alt="Woman" onClick={ () => history.push({
                pathname: '/home',
                state: 1
            }) }/>
        </div>

      </div>
    </div>
  )
}

export default Landing
