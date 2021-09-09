import React from 'react'



function Register() {
  return (
    <dev className="conteinerRegister">
      <dev className="yellowSide"></dev>
      <dev className="head"><h1 className="h1name">bopshop.</h1></dev>
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
    </dev>
  )
}

export default Register