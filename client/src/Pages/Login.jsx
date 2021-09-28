import React from 'react'
import LoginForm from '../components/LoginForm';


function Login() {
  return (
    <div className="container-login page">
      <div className="yellow-side"></div>
      <div className="head"><h1 className="h1-name">bopshop.</h1></div>
      <LoginForm loginPage={true} />
    </div>
  )
}

export default Login