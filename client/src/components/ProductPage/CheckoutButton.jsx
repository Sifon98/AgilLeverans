import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContext";

function CheckoutButton({ handleToggleCart, isCarted, popupLoginFunc }) {
  const { user } = useContext(UserContext);

  return (
    <button data-testid="button" className="checkout-btn" onClick={handleToggleCart}>
      {isCarted ? (
        <i className="fas fa-check"></i>
      ): (
        <i className="fas fa-shopping-bag"></i>
      )}
      <span data-testid="span" >{isCarted ? "Item added to cart" : "Add to cart"}</span> 
    </button>
  )
}

export default CheckoutButton
