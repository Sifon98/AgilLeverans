import React, { useEffect } from 'react';
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/MobileHeader';
import SideMenu from '../components/SideMenu';


function Confirmation() {

  useEffect(() => {
    clearCart();
  }, [])

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

  return (
    <div className="page">
      <div className="header">
        <DesktopHeader noCart={true} wishlist={true} />
        <MobileHeader backArrow={true} home={true} />
        <SideMenu backArrow="/home" home={true} />
      </div>
      <div className="body-container">
        <div className="content-container">
          <div className="check"><i class="fas fa-check"></i></div>
          <h1 className="thanku-text">Thank you for your purchase!</h1>
          <p className="order-text">Your order was completed successfully,
          you will soon get a confirmation and reciept via e-mail.</p>
        </div>
      </div>
    </div>
  )
}

export default Confirmation