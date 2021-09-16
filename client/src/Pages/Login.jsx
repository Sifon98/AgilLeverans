import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";


function Login() {
  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginError, setLoginError] = useState("");
  const [loginErrorUser, setLoginErrorUser] = useState("");
  const [loginErrorPass, setLoginErrorPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    let getUser = await res.json();
    if(getUser.error === "Invalid username or password."){
      setLoginError(true);
      setLoginErrorUser(true);
      setLoginErrorPass(true);
      setErrorMessage(getUser.error);
      return;
    }
    setNav({path: "/landing", direction: 1});
    setUser(getUser);
  }

  return (
    <div className="conteinerLogin page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <form className="formLogin">
        <input
          className={`inputLogin ${ loginErrorUser && "inputLoginError"}`}
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => {setUsername(e.target.value), setLoginErrorUser(false)}}
        />
        <input
          className={`inputLogin ${ loginErrorPass && "inputLoginError"}`}
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => {setPassword(e.target.value), setLoginErrorPass(false)}}
        />
        {loginError && <p className="errorText">{errorMessage}</p>}
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