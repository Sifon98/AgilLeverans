import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { validateEmail, validateUsername, validatePassword } from "../utils/register";
import { NavContext } from "../context/NavContext";



function Register() {

  const { setNav } = useContext(NavContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repPasswordError, setRepPasswordError] = useState("");


  const { user, setUser } = useContext(UserContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

     if(validateUsername(username)) {
      await setUsernameError(false)
      console.log("USERNAME GOOD")
    } else {
      await setUsernameError(true)
      console.log("Username is not valid!")
    }
    
    if(validateEmail(email)) {
      await setEmailError(false)
      console.log("EMAIL GOOD")
    } else {
      await setEmailError(true)
      console.log("Email is not valid!")
    }

    if(validatePassword(password)) {
      await setPasswordError(false)
      console.log("PASSWORD GOOD")
    } else {
      await setPasswordError(true)
      console.log("Password must have minimum six characters, at least one letter and one number")
    }

    if(password !== repeatPassword) {
      await setRepPasswordError(true)
      console.log("Password didnt match")
    } else {
      await setRepPasswordError(false)
      console.log("PASSWORD MATCH")
    }

    if(usernameError == true) {
      return
    }

    if(emailError == true) {
      return
    }

    if(passwordError == true) {
      return
    }

    if(repeatPassword == true){
      return
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, email, password})
    })

    const getUser = await res.json();
    setNav({path: "/landing", direction: 1});
    setUser(getUser);
  }

  
  return (
    <div className="conteinerRegister page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <form className="formRegister">
        <input
          className={`inputRegister ${ usernameError && "inputRegisterError"}`}
          autoComplete="off"
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => {setUsername(e.target.value), setUsernameError(false)}}
        />
        {usernameError && <p className="errorText">Username is not valid!</p>}
        <input
          className={`inputRegister ${ emailError && "inputRegisterError"}`}
          type="email"
          name="email"
          placeholder="e-mail adress"
          required
          onChange={(e) => {setEmail(e.target.value), setEmailError(false)}}
        />
        {emailError && <p className="errorText">Email is not valid!</p>}
        <input
          className={`inputRegister ${ passwordError && "inputRegisterError"}`}
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => {setPassword(e.target.value), setPasswordError(false)}}
        />
        {passwordError && <p className="errorText">Password is not valid!</p>}
        <input
          className={`inputRegister ${ repPasswordError && "inputRegisterError"}`}
          type="password"
          name="repPassword"
          placeholder="repeat password"
          required
          onChange={(e) => {setRepeatPassword(e.target.value), setRepPasswordError(false)}}
        />
        {repPasswordError && <p className="errorText">Password didn't match!</p>}
        <button className="registerButton" onClick={handleSubmit}>register.</button>
        <button className="loginLink" 
          onClick={(e) => {
            e.preventDefault();
            setNav({path: "/login", direction: 0});
          }}>
          alredy have an account?<br></br>login here
          </button>
        </form>
    </div>
  )
}

export default Register