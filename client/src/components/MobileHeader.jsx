import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";

function MobileHeader({ backArrow }) {
    const { user } = useContext(UserContext);
    const { setNav } = useContext(NavContext);

    return (
        <>
            <div className="mobile-header">
                {
                    backArrow ? <>
                            <i id="back-arrow" className="fas fa-arrow-left" aria-hidden="true" onClick={ () => setNav({path: "/home", direction: 0}) }></i>
                            <h1 className ="profile-title">bopshop.</h1> 
                            <i className="fas fa-user-circle" onClick={() => setNav({path: "/profile", direction: 1})}></i>
                        </> :
                        <>
                            <i className="fas fa-user-circle" onClick={() => setNav({path: "/profile", direction: 1})}></i>
                            <h1 className ="profile-title">bopshop.</h1>
                            <button className="shopping-cart-btn">
                            <i className="fas fa-shopping-bag" onClick={() => setNav({path: "/cart", direction: 1})}></i>
                                {user && user.cart && user.cart.length > 0 ? (
                                <div className="cart-count">{user.cart.length}</div>
                                ):null}
                            </button>
                        </>
                }
            </div>
        </>
    )
}

export default MobileHeader
