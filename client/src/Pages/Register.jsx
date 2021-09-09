import React from 'react'



function Register() {
  return (
    <div className="conteinerRegister">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <form className="formRegister">
        <input
          className="inputRegister"
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <input
          className="inputRegister"
          type="email"
          name="email"
          placeholder="e-mail adress"
          required
        />
        <input
          className="inputRegister"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input
          className="inputRegister"
          type="password"
          name="repPassword"
          placeholder="repeat password"
          required
        />
        <button className="registerButton">register.</button>
        <a className="loginLink" href="./Login">alredy have an account?<br></br>login here</a>
        </form>
    </div>
  )
}

export default Register