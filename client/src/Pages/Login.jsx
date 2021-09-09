import React from 'react'

function Login() {
  return (
    <div className="conteinerLogin">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
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
        <button className="registerButton-loginPage"><a href="/Register" className="link" >register.</a></button>
      </form>
    </div>
  )
}

export default Login