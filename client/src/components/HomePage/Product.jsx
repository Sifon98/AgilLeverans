import React from 'react'
import { useHistory } from "react-router-dom";

function Products({Product}) {
  const history = useHistory();

  return (
    <div className="product" onClick={() => history.push(`/products/${Product._id}`)}>
        <img className="image" src={Product.images[0]} />
        <div className="info-box">
        <button className="wishlist-btn">
            <i className={`${Product.isWishlisted ? "fas" : "far"} fa-heart`}></i>
        </button>
        <div className="text">
            <p>{Product.name}</p>
            <p>${Product.price}</p>
        </div>
        </div>
    </div> 
  )
}

export default Products
