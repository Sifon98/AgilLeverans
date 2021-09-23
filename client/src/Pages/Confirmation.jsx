// import React from 'react';
import React, { useContext } from 'react'
import { NavContext } from "../context/NavContext";
import { UserContext } from "../context/UserContext"


function Confirmation() {

  const { setNav } = useContext(NavContext);
  const { user } = useContext(UserContext);

  return (
    <div className="conteiner">
        <div className="header">
          <i className="fas fa-user-circle" onClick={() => setNav({path: "/profile", direction: 1})}></i>
          <h1 className ="profileTitle">bopshop.</h1>
          <button className="shopping-cart-btn">
            <i className="fas fa-shopping-bag" onClick={() => setNav({path: "/cart", direction: 1})}></i>
              {user.cart && user.cart.length > 0 ? (
                <div className="cart-count">{user.cart.length}</div>
              ):null}
          </button>
        </div>
        <h1 className="thanku-text">Thank you for your purchase!</h1>
        <p className="order-text">Your order was completed successfully.</p>
    </div>
  )
}

export default Confirmation