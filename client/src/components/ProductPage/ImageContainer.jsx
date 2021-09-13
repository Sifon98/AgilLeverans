import React from 'react'
import { useHistory } from "react-router-dom";

function ImageContainer({ product, isWishlisted, handleToggleWishlist, focusRef }) {

  const history = useHistory();

  return (
    <div className="image-container">
    <img src={product.image} alt="product image" /> 
    <button className="go-back-btn" onClick={() => history.push({
          pathname: '/',
          state: product.gender
      }) }>
      <i className="fas fa-chevron-left"></i>
    </button>
    <button className="wishlist-btn fill" onMouseDown={() => handleToggleWishlist()}>
      <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
    </button>
    <button style={{height: "0", width: "0", opacity: "0", position: "absolute"}} ref={focusRef}></button>
  </div>
  )
}

export default ImageContainer
