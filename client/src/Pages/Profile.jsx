import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import Header from "../components/Header"

function Profile() {
  const history = useHistory();
  
  const { user, setUser } = useContext(UserContext);
  
  // useEffect(() => {
    //   if(user) history.push("/");
    // }, [user])
    
    
    const handleLogout = async () => {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      await res;
      setUser(null);
      history.push("/login");
    }
    
  const [ isDisabledName, setIsDisabledName ] = useState( false );
  const [ isDisabledEmail, setIsDisabledEmail ] = useState( false );
  const [ isDisabledPassword, setIsDisabledPassword ] = useState( false );
  const [ userName, setUserName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ disableSaveButton, setdisableSaveButton ] = useState( true );
  const buttonText = (isDisabled) => isDisabled ? 'save.' : 'edit.';
  
  return (
    <div className= "profilePageWrapper">
      <Header />
        {/* <header className="profileTitleContainer">
          <i  onClick={ () => history.push("/") } id="backArrow" className="fas fa-arrow-left"></i>
          <h1 onClick={ () => history.push("/") } className="profileTitle">bopshop.</h1>
          <i id="shoppingCart" className="fas fa-shopping-bag"></i>
        </header> */}
        <div className="accountContainer">
          <h1 className="accountTitle">your account.</h1>
        </div>

        <div className="profilePicContainer">
            <i id="profilePic" class="far fa-user-circle"></i>
          <div className="profileCameraBackground">
            <i id="profileCameraIcon" class="fas fa-camera"></i>
          </div>
        </div>

        <div className="accountInfoContainer">
        <div className="accountForm" action="" method="post" >
          
            <label class="username" id="label" htmlFor="username" >username</label>
            <input onChange={(e) => setUserName(e.target.value)} defaultValue={user.username} className="inputText" id="input" type="text" disabled={!isDisabledName} />
            <button onClick={()=> setIsDisabledName(boolean => !boolean)}>{buttonText(isDisabledName)}</button>
            <br />

            <label className="emailadress" htmlFor="emailadress" >emailadress.</label>
            <input  onChange={(e) => setEmail(e.target.value)} defaultValue={user.email} className="inputText" type="text" disabled={!isDisabledEmail}/>
            <button onClick={()=> setIsDisabledEmail(boolean => !boolean)}>{buttonText(isDisabledEmail)}</button>
            <br />
          
            <label  className="password" htmlFor="password">enter new password</label>
            <input  onChange={(e) => setPassword(e.target.value)} defaultValue="" className="inputText" type="password" disabled={!isDisabledPassword} placeholder="********"/>
            <button onClick={() => setIsDisabledPassword( boolean => !boolean )}>{buttonText(isDisabledPassword)}</button>
            <button className="saveButton" disabled={disableSaveButton}>Save changes</button>
          
        </div>
        </div>

        <footer className="signoutContainer">
          <button className="signoutButton" onClick={handleLogout}>sign out.</button>
        </footer>
    </div>
  )
}

export default Profile