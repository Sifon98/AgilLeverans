import React from 'react'

function Login() {
  return (
    <dev className="conteinerLogin">
      <dev><h1>bopshop.</h1></dev>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button>Login</button>
        <button>Register</button>
      </form>
    </dev>
  )
}

export default Login