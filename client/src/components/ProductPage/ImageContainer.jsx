import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { NavContext } from "../../context/NavContext";



function ImageContainer({ product, focusRef, selectedColor}) {

  const history = useHistory();
  const { user } = useContext(UserContext);
  const { setNav } = useContext(NavContext);

  const [hasLoaded, setHasLoaded] = useState(false);


  return (
    <div className="image-container">
      <div className="img-overlay" style={hasLoaded ? {opacity: 0} : null}></div>
      <img onLoad={() => setHasLoaded(true)} src={product.images && product.images[selectedColor.index]} alt="product image" /> 

      <button className="go-back-btn" onClick={() => setNav({
            path: '/home',
            direction: 0,
            state: product.gender
        })}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="shopping-cart-btn" onClick={() => setNav({path: "/cart", direction: 1})}>
        {user && user.cart && user.cart.length > 0 ? (
          <div className="cart-count">{user.cart.length}</div>
        ):null}
        <i className="fas fa-shopping-bag"></i>
      </button>
      {/* <button className="wishlist-btn fill" onMouseDown={() => handleToggleWishlist()}>
        <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
      </button> */}
      <button style={{height: "0", width: "0", opacity: "0", position: "absolute"}} ref={focusRef}></button>
    </div>
  )
}

export default ImageContainer
