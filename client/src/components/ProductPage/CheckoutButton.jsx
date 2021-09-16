import React from 'react'

function CheckoutButton({ handleToggleCart, isCarted }) {
  return (
    <button className="checkout-btn" onClick={() => handleToggleCart()}>
      {isCarted ? (
        <i className="fas fa-check"></i>
      ): (
        <i className="fas fa-shopping-bag"></i>
      )}
      <span>{isCarted ? "Item added to cart" : "Add to cart"}</span> 
    </button>
  )
}

export default CheckoutButton
 