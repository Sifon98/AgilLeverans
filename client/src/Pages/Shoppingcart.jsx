import React from 'react'
import { useHistory } from "react-router-dom";


function Shoppingcart() {
    const history = useHistory();

    return (
        <div className="wrapper">
            <header className ="navContainer">
            <i className="fas fa-user-circle" id ="userCircle" onClick={() => history.push("/profile")}></i>
            <h1 onClick={ () => history.push("/") } className ="profileTitle">bopshop.</h1>
            <i id="shoppingCart" className="fas fa-shopping-bag"></i>
            </header>
        
        </div>


        
    )
}


export default Shoppingcart