import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { validateEmail, validateUsername, validatePassword } from "../utils/register";



function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if(user) history.push("/landing");
  }, [user])


  const handleSubmit = async (e) => {
    e.preventDefault();

    let usernameGood = false;
    let emailGood = false;
    let passwordGood = false;

    if(validateUsername(username)) {
      console.log("USERNAME GOOD")
    } else {
      console.log("Username is not valid!")
    }
    
    if(validateEmail(email)) {
      console.log("EMAIL GOOD")
    } else {
      console.log("Email is not valid!")
    }

    if(validatePassword(password)) {
      console.log("PASSWORD GOOD")
    } else {
      console.log("Password must have minimum six characters, at least one letter and one numbe")
    }

    if(password !== repeatPassword) {
      console.log("Password didnt match")
    } else {
      console.log("PASSWORD MATCH")
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
    setUser(getUser);
    history.push("/landing");
  }

  
  return (
    <div className="conteinerRegister page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <form className="formRegister">
        <input
          className="inputRegister"
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputRegister"
          type="email"
          name="email"
          placeholder="e-mail adress"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputRegister"
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="inputRegister"
          type="password"
          name="repPassword"
          placeholder="repeat password"
          required
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button className="registerButton" onClick={handleSubmit}>register.</button>
        <button className="loginLink" 
          onClick={(e) => {
            e.preventDefault();
            history.push("/login")
          }}>
          alredy have an account?<br></br>login here
          </button>
        </form>
    </div>
  )
}

export default Register