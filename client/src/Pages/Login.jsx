import React from 'react'

function Login() {
  return (
    <dev className="conteinerLogin">
      <dev className="yellowSide"></dev>
      <dev className="head"><h1 className="h1name">bopshop.</h1></dev>
      <form className="formLogin">
        <input
          className="inputLogin"
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <input
          className="inputLogin"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button className="loginButton">login.</button>
        <button className="registerButton-loginPage">register.</button>
      </form>
    </dev>
  )
}

export default Login