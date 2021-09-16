import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";
import { useHistory } from "react-router-dom";


function Login() {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const getUser = await res.json();
    setNav({path: "/landing", direction: 1});
    setUser(getUser);
  }

  return (
    <div className="conteinerLogin page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <form className="formLogin">
        <input
          className="inputLogin"
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputLogin"
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleLogin}>login.</button>
        <button className="registerButton-loginPage" 
          onClick={(e) => {
            e.preventDefault();
            setNav({path: "/register", direction: 1});
          }}>
          register.
        </button>
      </form>
    </div>
  )
}

export default Login