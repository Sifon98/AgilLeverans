import React, { useContext } from 'react'
import { NavContext } from "../../context/NavContext";

const formNum = 2;

function Form2({currentForm, setCurrentForm}) {

  const { setNav } = useContext(NavContext);

  return (
    <div className="form-box box-3" style={currentForm > formNum ? {maxHeight: "60px"} : null}>
      <div className="hidden-overlay" style={currentForm >= formNum ? {opacity: "0", pointerEvents: "none"} : null}></div>
      <div className="label-container" onClick={() => setCurrentForm(formNum)}>
        <div className="number">{currentForm <= formNum ? "3" : <i className="fas fa-check"></i>}</div>
        <label>confirmation.</label>
      </div>
      <button 
        className="continue-btn-last" 
        onClick={() => setNav({path: "/confirmation", direction: 1})}
        >
        <span>Confirm Purchase </span>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Form2
