import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { NavContext } from "../../context/NavContext";

function Products({Product}) {
  const history = useHistory();
  const { setNav } = useContext(NavContext);

  return (
    <div className="product" onClick={() => setNav({path: `/products/${Product._id}`, direction: 1})}>
        <img className="image" src={Product.images[0]} />
        <div className="info-box">
        <button className="wishlist-btn">
            <i className={`${Product.isWishlisted ? "fas" : "far"} fa-heart`}></i>
        </button>
        <div className="text">
            <p>{Product.name}</p>
            <p>{Product.price} kr</p>
        </div>
        </div>
    </div> 
  )
}

export default Products
