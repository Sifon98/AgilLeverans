import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


function ImageContainer({ product, isWishlisted, handleToggleWishlist, focusRef }) {

  const history = useHistory();
  const { user } = useContext(UserContext);


  useEffect(() => {
    console.log(product)
  }, [])

  return (
    <div className="image-container">
    <img src={product && product.images[0]} alt="product image" /> 
    <button className="go-back-btn" onClick={() => history.push({
          pathname: '/',
          state: product.gender
      })}>
      <i className="fas fa-chevron-left"></i>
    </button>
    <button className="shopping-cart-btn" onClick={() => history.push("/cart")}>
      {user.cart && user.cart.length > 0 ? (
        <div className="cart-count">{user.cart.length}</div>
      ):null}
      <i className="fas fa-shopping-bag"></i>
    </button>
    <button className="wishlist-btn fill" onMouseDown={() => handleToggleWishlist()}>
      <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
    </button>
    <button style={{height: "0", width: "0", opacity: "0", position: "absolute"}} ref={focusRef}></button>
  </div>
  )
}

export default ImageContainer
