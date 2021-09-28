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

    <div className="container-first-load page">
        <div className="yellow-side"></div>
        <img src={logoLogin} />
        <div className="welcome-text">welcome to bopshop.</div>
        <div className="random-line"></div>
        <button className="login-button" onClick={() => setNav({path: "/login", direction: 1})}>login.</button>
        <button className="register-button-loginPage" onClick={() => setNav({path: "/register", direction: 1})}>register.</button>
    </div>
  )
}

export default FirstLoad