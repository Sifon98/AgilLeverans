import React from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";


function Wishlist() {
  return (
    <div>
      <div className="wishHeader">
        <i className="fas fa-user-circle"></i>
         <img src={logo} />
        <i class="fas fa-shopping-bag"></i>

      </div>
      <div className="wishAlbum">
        <p className="albumText">Gillade Artiklar</p>
        <img className="wishItem" src="./src/Women.png" alt="Woman" ></img>

        <img className="wishItem" src="./src/Men.png" alt="Man"></img>
      
        <img className="wishItem" src="./src/Men.png" alt="Man"></img>
    
        <img className="wishItem" src="./src/Men.png" alt="Man"></img>
      </div>
    </div>
  )
}

export default Wishlist