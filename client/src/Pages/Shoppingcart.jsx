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

                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div>   

                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div>           
                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div> 

                <svg id="greyBar" width="47" height="1" viewBox="0 0 47 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="47" height="1" transform="matrix(1 0 0 -1 0 1)" fill="black" fill-opacity="0.16"/>
                </svg>
          
            </div>
        
    </div>


        
    )
}


export default Shoppingcart