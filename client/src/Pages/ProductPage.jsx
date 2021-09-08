import React, {useEffect, useState, useRef} from 'react'
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


function Product() {
  const history = useHistory();

  const descriptionRef = useRef(null);
  const focusRef = useRef(null);

  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const productId = location.pathname.replace("/products/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
      console.log(data.product)
      setProduct(data.product)
    }
    getProduct();
  }, [])


  useEffect(() => {
    if(descriptionRef.current) {
      setDescHeight(descriptionRef.current.offsetHeight)
    }
  }, [product])


  const handleToggleWishlist = () => {
    if(isWishlisted) {
      toast("Removed item from wishlist");
    } else {
      toast.success("Added item to wishlist");
    };
    setIsWishlisted(bool => !bool);
    setTimeout(() => focusRef.current.focus(), 250);
  }


  return (
    <div className="product-page">
        <ToastContainer 
          position="top-center" 
          autoClose={2500} 
          hideProgressBar 
          pauseOnHover={false}
          pauseOnFocusLoss={false}
           />
        <div className="image-container">
          <img src={product.image} alt="product image" /> 
          <button className="go-back-btn" onClick={() => history.goBack()}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="wishlist-btn fill" onMouseDown={() => handleToggleWishlist()}>
            <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
          </button>
          <button style={{height: "0", width: "0", opacity: "0", position: "absolute"}} ref={focusRef}></button>
        </div>

        <div className="wrapper">
          <div className="info-container">
            <div className="container">
              <div className="name">{product.name}</div>
              <div className="price">${product.price}.00</div>
            </div>
            <p
            className="description" 
            style={showFullDesc ? {maxHeight: "1000px"} : {maxHeight: `${descHeight}px`}} 
            ref={descriptionRef}>
            {!isEmpty(product) && (
            <>
              {showFullDesc ? product.description : product.description.substring(0, 300)}
              {!showFullDesc && product.description.length > 300 ? (
                <span className="show-more" onClick={() => setShowFullDesc(true)}> Show more...</span>
              ):null}
            </>
            )}
            </p>
          </div>
          <div className="options-container">
            <label>Color</label>
            <ul className="color-list">
              <li style={{background: "#CDC0B7"}}>
                <div className="selected">
                  <i className="fas fa-check"></i>
                </div>
              </li>
              <li style={{background: "#772828"}}>
              </li>
              <li style={{background: "#000000"}}>
              </li>
            </ul>
          </div>
          <div className="options-container">
            <label>Size</label>
            <ul className="size-list">
              <li className="size-btn selected">S</li>
              <li className="size-btn">M</li>
              <li className="size-btn">L</li>
            </ul>
          </div>
        </div>
        <div className="bottom-whitespace"></div>
        <button className="checkout-btn">
          <i className="fas fa-shopping-bag"></i>
          <span>Add to cart</span> 
        </button>
    </div>
  )
}

export default Product