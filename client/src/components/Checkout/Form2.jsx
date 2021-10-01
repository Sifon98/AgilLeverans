import React, { useContext } from 'react'
import { NavContext } from "../../context/NavContext";

const formNum = 2;

function Form2({currentForm, setCurrentForm, totalPrice, products}) {

  const { setNav } = useContext(NavContext);

  return (
    <div className={`form-box box-3 ${currentForm === 0 ? "hide-form" : ""}`} style={currentForm > formNum ? {maxHeight: "60px"} : null}>
      <div className="hidden-overlay" style={currentForm >= formNum ? {opacity: "0", pointerEvents: "none"} : null}></div>
      <div className="label-container" onClick={() => setCurrentForm(formNum)}>
        <div className="number">{currentForm <= formNum ? "3" : <i className="fas fa-check"></i>}</div>
        {/* <label>confirmation.</label> */}
      </div>
      <div className="order-summary">
        <div className="top-section">
          <div className="cart-summary"><i className="fas fa-shopping-bag"></i> CART SUMMARY</div>
        </div>
        <div className="underline"></div>
        <ul className="bottom-section">
          {products && products.map(x => (
            <li key={x._id}>
              <div>
                <span className="product-count">{x.count}</span>
                <span className="product-name"> x {x.item.name} ({x.color.name})</span>
              </div>
              <div className="total-product-price">${x.countPrice}</div>
            </li>
          ))}
        </ul>
        <div className="underline"></div>
        <div className="price-container">
            <div className="subtotal">
              <div>Subtotal</div>
              <div className="bold">${totalPrice}<span> (VAT incl.)</span></div>
              </div>
            <div className="shipping">
              <div>Shipping</div>
              <div className="bold">FREE</div>
            </div>
        </div>
      </div>
      <button 
        className="continue-btn-last" 
        onClick={() => setNav({path: "/confirmation", direction: 1})}
        style={{backgroundColor: "#57c95b"}}
        >
        <span>Confirm Purchase </span>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Form2
