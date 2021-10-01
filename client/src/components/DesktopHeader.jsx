import React, { useState, useContext } from 'react'
// import logoLarge from '../../img/logo-large.svg'
import logoLarge from "../img/logo-large.svg";
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";
import CartDropdown from './CartDropdown';

function DesktopHeader({popupLoginFunc, loggedIn, wishlist, noCart, noProfile}) {
    const { user } = useContext(UserContext);
    const { setNav } = useContext(NavContext);

    const [cartToggle, setCartToggle] = useState(false);

    const cartDropdown = () => {
        if(cartToggle == true){
            setCartToggle(false)
        }else{
            setCartToggle(true)
        }
    }

    return (
        <>
            <div className="desktop-header">
                <img alt="image"  src={logoLarge} />
                <div className="helper">
                    { noProfile ? null : <div className="icons" onClick={user ? () => setNav({path: "/profile", direction: 1}) : (e) => popupLoginFunc(e)}>
                        <i className="fas fa-user-circle"></i>
                    </div>}
                    {/* { navigator.userAgent.includes("Electron") ? ( */}
                        {wishlist ? null : <div className="icons" onClick={user ? () => setNav({path: "/wishlist", direction: 1}) : (e) => popupLoginFunc(e)}>
                            <i className="fas fa-heart"></i>
                        </div>}
                    {/* ) : null} */}
                    {noCart ? null : <div className="icons"  onClick={user ? () => cartDropdown() : (e) => popupLoginFunc(e)}>
                        <button className="shopping-cart-btn">
                            <i className="fas fa-shopping-bag"></i>
                                {user && user.cart && user.cart.length > 0 ? (
                                    <div className="cart-count-home">{user.cart.length}</div>
                                ):null}
                        </button>
                    </div>}
                    <CartDropdown cartToggle={cartToggle} setCartToggle={setCartToggle} wishlist={wishlist} />
                </div>
            </div>
        </>
    )
}

export default DesktopHeader
