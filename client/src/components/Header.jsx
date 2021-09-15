import React from 'react'
import { useLocation } from 'react-router-dom'
import {NavContext} from '../context/'

function Header() {
    const location = useLocation();

    return (
        <header className="profileTitleContainer">

            {location.pathname === '/profile' ? <i onClick={() => history.push( "/" )} id="backArrow" className="fas fa-arrow-left" ></i> : null}
            
            {location.pathname === '/home' ? <i className="fas fa-user-circle" onClick={() => history.push( "/profile" )}></i> : null}
            
          <h1 onClick={ () => history.push("/") } className="profileTitle">bopshop.</h1>
          <i  id="shoppingCart" className="fas fa-shopping-bag"></i>
        </header>
    )
}

export default Header
