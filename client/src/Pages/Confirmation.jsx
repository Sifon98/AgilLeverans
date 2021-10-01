import React, { useEffect, useContext } from 'react';
import { NavContext } from '../context/NavContext'
import { UserContext } from '../context/UserContext'
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/MobileHeader';
import SideMenu from '../components/SideMenu';


function Confirmation() {
  const { setNav } = useContext(NavContext);
  const { user, setUser } = useContext(UserContext);

  const clearCart = async () => {
    const res = await fetch("/api/clear-cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
    const data = await res.json();
    setUser({
      ...user,
      cart: data.cart
    })
  }

  useEffect(() => {
    clearCart();
  }, [])

  return (
    <div className="page">
      <div className="header">
        <DesktopHeader noCart={true} wishlist={true} />
        <MobileHeader backArrow={true} home={true} backPath="/home"/>
        <SideMenu backArrow="/home" home={true} backPath="/home"/>
      </div>
      <div className="body-container">
        <div className="content-container">
          <div className="check"><i className="fas fa-check"></i></div>
          <h1 className="thanku-text">Thank you for your purchase!</h1>
          <p className="order-text">Your order was completed successfully,
          you will soon get a confirmation and receipt via e-mail.</p>
          <button className="continue" onClick={() => setNav({path: "/home", direction: 0})}>continue shopping.</button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation