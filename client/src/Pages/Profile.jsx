import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import SideMenu from '../components/SideMenu';
import DesktopHeader from '../components/DesktopHeader';


function Profile() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    await res;
    setNav({ path: "/login", direction: 0 })
    setUser(null);
  }

  const [isDisabledName, setIsDisabledName] = useState(false);
  const [isDisabledEmail, setIsDisabledEmail] = useState(false);
  const [isDisabledPassword, setIsDisabledPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSaveButton, setdisableSaveButton] = useState(true);
  const buttonText = (isDisabled) => isDisabled ? 'save.' : 'edit.';

  
  const handleEdit = async () => {
    const res = await fetch("/api/register", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password })
    })
    const getUser = await res.json();
    setUser(getUser);
  }
  
  const editUser = async (e) => {
    e.preventDefault();
    setIsDisabledName(boolean => !boolean);
    handleEdit();
    console.log({ userName })
  }

  const editEmail = async (e) => {
    e.preventDefault();
    setIsDisabledEmail(boolean => !boolean);
    handleEdit();
    console.log({ email })
  }

  const editPass = async (e) => {
    e.preventDefault();
    setIsDisabledPassword(boolean => !boolean);
    handleEdit();
    console.log({ password })
  }

  const newPass =
  <>
    <label className="newPassword" htmlFor="password">enter new password</label>
    <input onChange={(e) => setPassword(e.target.value)} className="inputText" type="password" placeholder="•••••••••" disabled={!isDisabledPassword} />
    {isDisabledPassword
      ? <button onClick={editPass}>{buttonText(isDisabledPassword)}</button>
      : <button onClick={(e) => {
        setIsDisabledPassword(boolean => !boolean), e.preventDefault();
      }}>{buttonText(isDisabledPassword)}</button>
      
    }
  </>;


  return (
    <div className="profilePageWrapper">
      <SideMenu backArrow="/home" />
      <DesktopHeader />
      <header className="profileTitleContainer">
        <i onClick={() => setNav({ path: "/home", direction: 0 })} id="backArrow" className="fas fa-arrow-left"></i>
        <h1 className="profileTitle">bopshop.</h1>
        <i id="shoppingCart" style={{ visibility: "hidden" }} className="fas fa-shopping-bag"></i>
      </header>

      <div className="accountContainer">
        <h1 className="accountTitle">your account.</h1>
      </div>

      <div className="profilePicContainer" style={{ display: "none" }}>
        <i id="profilePic" className="far fa-user-circle"></i>
        <div className="profileCameraBackground">
          <i id="profileCameraIcon" className="fas fa-camera"></i>
        </div>
      </div>

      <div className="accountInfoContainer">
        <form className="accountForm" action="" >
          <label className="username" id="label" htmlFor="username" >username</label>
          <input onChange={(e) => setUserName(e.target.value)} defaultValue={user && user.username} className="inputText" id="input" type="text" disabled={!isDisabledName} />
          {isDisabledName
            ? <button onClick={editUser}>{buttonText(isDisabledName)}</button>
            : <button onClick={(e) => {
              setIsDisabledName(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledName)}</button>
          }
          <br />

          <label className="emailadress" htmlFor="emailadress" >email</label>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={user && user.email} className="inputText" type="text" disabled={!isDisabledEmail} />
          {isDisabledEmail
            ? <button onClick={editEmail}>{buttonText(isDisabledEmail)}</button>
            : <button onClick={(e) => {
              setIsDisabledEmail(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledEmail)}</button>
          }
           
          <br />
          
          <label className="password" htmlFor="password">current password</label>
          <input onChange={(e) => setPassword(e.target.value)} defaultValue={user && user.password} className="inputText" type="password" placeholder="•••••••••" disabled={!isDisabledPassword} />
          {isDisabledPassword
            ? <><button onClick={(e) => {
              setIsDisabledPassword(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledPassword)}</button>
            {newPass}</>
              
            : <button onClick={(e) => {
              setIsDisabledPassword(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledPassword)}</button>
          }
          
        </form>
      </div>

      <footer className="signoutContainer">
        <button className="signoutButton" onClick={handleLogout}>sign out.</button>
      </footer>
    </div>
  )
}



export default Profile

           
