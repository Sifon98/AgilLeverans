import React from 'react'


function Landing() {
  return (
    <div className="wrapper">
      <div className="imageContainer">
      <div className="leftSide">
        <img className="menImage" src="./src/Men.png" alt="Men" />
        {/* <button className="womensButton">women</button>
        <button className="mensButton">mens</button> */}
      </div>
      <div className="rightSide">
        <div className="titleContainer">
          <h1 className="title">bopshop.</h1>
        </div>
        <img className="womenImage" src="./src/Women.png" alt="Women" />
      </div>
      </div>
    </div>
  )
}

export default Landing
