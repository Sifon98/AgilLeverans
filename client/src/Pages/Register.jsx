import React from 'react'
import RegisterForm from '../components/RegisterForm';



function Register() {
  return (
    <div className="conteinerRegister page">
      <div className="yellowSide"></div>
      <div className="head"><h1 className="h1name">bopshop.</h1></div>
      <RegisterForm registerPage={true}/>
    </div>
  )
}

export default Register