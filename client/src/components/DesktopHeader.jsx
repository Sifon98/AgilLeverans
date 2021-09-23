import React, { useContext } from 'react'
// import logoLarge from '../../img/logo-large.svg'
import logoLarge from "../img/logo-large.svg";
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";

function DesktopHeader({popupLoginFunc, loggedIn}) {
    const { user } = useContext(UserContext);
    const { setNav } = useContext(NavContext);

    return (
        <>
            <div className="desktopHeader">
                <img src={logoLarge} />
                <div className="helper">
                    <div className="icons" onClick={loggedIn ? () => setNav({path: "/profile", direction: 1}) : (e) => popupLoginFunc(e)}>
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="icons"  onClick={loggedIn ? () => setNav({path: "/cart", direction: 1}) : (e) => popupLoginFunc(e)}>
                        <button className="shopping-cart-btn">
                            <i className="fas fa-shopping-bag"></i>
                                {user && user.cart && user.cart.length > 0 ? (
                                    <div className="cart-count-home">{user.cart.length}</div>
                                ):null}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopHeader
