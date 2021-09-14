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

            <div className="cartContainer">
            <h1 className="cartTitle">your cart.</h1>
            </div>

            <div className="itemContainer">
            {/* <i id="profilePic" class="far fa-user-circle"></i>
            <i id="profilePic" class="far fa-user-circle"></i>
            <i id="profilePic" class="far fa-user-circle"></i> */}
            <div className="item"></div>           
            <div className="item"></div>           
            <div className="item"></div>           

        </div>
        
    </div>


        
    )
}


export default Shoppingcart