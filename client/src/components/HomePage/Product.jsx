import React, { useState } from 'react'
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
            <div className="all-colors">
              {Product.colors.map((Color, idx) => (
                idx < 3 && <div key={Color.name} style={{background: Color.hex}} className="show-color-small" />
              ))}
              {Product.colors.length > 3 && <p>+{Product.colors.length - 3}</p>}
            </div>
            
        </div>
        </div>
    </div> 
  )
}

export default Products
