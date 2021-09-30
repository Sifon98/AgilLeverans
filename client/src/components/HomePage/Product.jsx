import React, { useContext, useState } from 'react'
import { NavContext } from "../../context/NavContext";

function Products({Product, loggedIn, popupLoginFunc}) {
  const { setNav } = useContext(NavContext);

  const [ hasLoaded, setHasLoaded ] = useState(false);

  return (
    <div className="product" onClick={() => setNav({path: `/products/${Product._id}`, direction: 1})}>
        <div className="overlay" style={hasLoaded ? {opacity: "0"} : null}></div>
        <div className="image-helper">
          <img className="image" src={Product.images[0]} onLoad={() => setHasLoaded(true)} />
        </div>
        <div className="info-box">
        <button className="info-btn">
            <i className={`fas fa-info`}></i>
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
