import React from 'react'
import LoginForm from '../components/LoginForm';


function Login() {
  return (
    <div className="conteinerLogin page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <LoginForm loginPage={true} />
    </div>
  )
}

export default Login