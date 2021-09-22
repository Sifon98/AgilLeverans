import React, { useEffect, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";
import { useHistory } from "react-router-dom";

function FirstLoad() {
  const history = useHistory();
  
  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);


  return (

    <div className="conteinerFirstLoad page">
        <div className="yellowSide"></div>
        <div className="head"><h1 className="h1name">bopshop.</h1></div>
        <div className="welcomeText">welcome to bopshop.</div>
        <div className="randomLine"></div>
        <button className="loginButton" onClick={() => setNav({path: "/login", direction: 1})}>login.</button>
        <button className="registerButton-loginPage" onClick={() => setNav({path: "/register", direction: 1})}>register.</button>
    </div>
  )
}

export default FirstLoad