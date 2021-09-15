import React from 'react'

function FirstLoad() {


  return (

    <div className="conteinerFirstLoad">
        <div className="yellowSide"></div>
        <div className="head"><h1 className="h1name">bopshop.</h1></div>
        <div className="welcomeText">welcome to bopshop.</div>
        <div className="randomLine"></div>
        <button className="loginButton"><a href="/Login" className="link">login.</a></button>
        <button className="registerButton-loginPage"><a href="/Register" className="link">register.</a></button>
    </div>
  )
}

export default FirstLoad