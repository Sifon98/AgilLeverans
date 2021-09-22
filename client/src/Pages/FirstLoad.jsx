import React, { useEffect, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";
import { useHistory } from "react-router-dom";
import logoLogin from "../img/logo-login.svg"

function FirstLoad() {
  const history = useHistory();
  
  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);


  return (

    <div className="containerFirstLoad page">
        <div className="yellowSide"></div>
        <img src={logoLogin} />
        <div className="welcomeText">welcome to bopshop.</div>
        <div className="randomLine"></div>
        <button className="loginButton" onClick={() => setNav({path: "/login", direction: 1})}>login.</button>
        <button className="registerButton-loginPage" onClick={() => setNav({path: "/register", direction: 1})}>register.</button>
    </div>
  )
}

export default FirstLoad