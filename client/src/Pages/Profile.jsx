import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

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



  return (
    <div className= "profilePageWrapper">
        <header className="profileTitleContainer">
          <i  onClick={ () => history.push("/") } id="backArrow" className="fas fa-arrow-left"></i>
          <h1 onClick={ () => history.push("/") } className="profileTitle">bopshop.</h1>
          <i id="shoppingCart" className="fas fa-shopping-bag"></i>
        </header>
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
          <form className="accountForm" action="">
            <label class="username" htmlFor="username" ></label>
            <input className="inputText" type="text" placeholder="username"/>
            <button>edit.</button>
            <br />

            <label class="emailadress" htmlFor="emailadress" ></label>
            <input type="text" placeholder="email adress"/>
            <button>edit.</button>
            <br />
            
            <label class="password" htmlFor="password"></label>
            <input type="text" placeholder="password" />
            <button>change.</button>
          </form>
        </div>


        <footer className="signoutContainer">
          <button className="signoutButton" onClick={handleLogout}>sign out.</button>
        </footer>
    </div>
  )
}

export default Profile