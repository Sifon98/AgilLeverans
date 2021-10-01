import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import SideMenu from '../components/SideMenu';
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/MobileHeader';
import DownloadsContainer from '../components/DownloadsContainer';


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

  
  const handleEdit = async (type) => {
    const res = await fetch(`/api/${type}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password })
    })
    const getUser = await res.json();
    if (type === "updatename") {
      setUser(null)
      return;
    }
    setUser(getUser.user);
  }
  
  const editUser = async (e) => {
    e.preventDefault();
    setIsDisabledName( boolean => !boolean );
    if ( userName.length == 0 ) {
      return;
    }
    handleEdit('updatename');
  }

  const editEmail = async (e) => {
    e.preventDefault();
    setIsDisabledEmail(boolean => !boolean);
    if ( email.length == 0 ) {
      return;
    }
    handleEdit( 'updateemail' );
  }

  const editPass = async (e) => {
    e.preventDefault();
    setIsDisabledPassword(boolean => !boolean);          
    // handleEdit();
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
    <div className="profilePageWrapper page">
      <SideMenu backArrow="/go-back" />
      <DesktopHeader noProfile={true} />
      <MobileHeader backArrow={true} backPath="/go-back" cart={true} />

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
          <input onChange={(e) => setUserName(e.target.value)} defaultValue={user && user.username} style={!isDisabledName ? {color: "lightgrey"} : null} className="inputText"
            id="input" type="text" disabled={!isDisabledName} />
          {isDisabledName
            ? <button onClick={editUser}>{buttonText(isDisabledName)}</button>
            : <button onClick={(e) => {
              setIsDisabledName(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledName)}</button>
          }
          <br />

          <label className="emailadress" htmlFor="emailadress" >email</label>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={user && user.email} style={!isDisabledEmail ? {color: "lightgrey"} : null} className="inputText" type="text" disabled={!isDisabledEmail} />
          {isDisabledEmail
            ? <button onClick={editEmail}>{buttonText(isDisabledEmail)}</button>
            : <button onClick={(e) => {
              setIsDisabledEmail(boolean => !boolean), e.preventDefault();
            }}>{buttonText(isDisabledEmail)}</button>
          }
           
          <br />
        </form>
      </div>

      <footer className="signoutContainer">
        <button className="signoutButton" onClick={handleLogout}>sign out.</button>
        <div className="download-helper">
          <DownloadsContainer position="relative" size="small" />
        </div>
      </footer>
    </div>
  )
}



export default Profile

           
