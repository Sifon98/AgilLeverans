import React from 'react'
import RegisterForm from '../components/RegisterForm';
import DownloadsContainer from '../components/DownloadsContainer';

function Register() {
  return (
    <div className="container-register page">
      <div className="yellow-side"></div>
      <div className="head"><h1 className="h1-name">bopshop.</h1></div>
      <RegisterForm registerPage={true}/>
      <DownloadsContainer size="small" />
    </div>
  )
}

export default Register