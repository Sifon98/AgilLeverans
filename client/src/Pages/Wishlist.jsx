import React from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";


function Wishlist() {
  return (
    <div className="wishHeader">
        <i className="fas fa-user-circle"></i>
         <img src={logo} />
        <i class="fas fa-shopping-bag"></i>

    </div>
  )
}

export default Wishlist