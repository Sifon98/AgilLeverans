import React, {useEffect, useState, useRef, useContext} from 'react'
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/UserContext";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function Product() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const descriptionRef = useRef(null);
  const focusRef = useRef(null);

  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const color = params.get("color");
    const size = params.get("size");

    const getProduct = async () => {
      const productId = location.pathname.replace("/products/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();

      setProduct(data.product);

      const isColorValid = data.product.colors.some(col => col.name === color);
      const hex = isColorValid ? data.product.colors.find(col => col.name === color).hex : null;
      const isSizeValid = data.product.sizes.includes(size);
      
      setSelectedColor({
        ...(isColorValid && {name: color, hex}),
        ...(!isColorValid && {name: data.product.colors[0].name, hex: data.product.colors[0].hex}),
      });
      setSelectedSize(isSizeValid ? size : data.product.sizes[0]);
    }
    getProduct();
  }, [])

  useEffect(() => {
    if(descriptionRef.current) {
      setDescHeight(descriptionRef.current.offsetHeight)
    }
  }, [product])

  useEffect(() => {
    if(!user.wishlist) return;

    const params = new URLSearchParams(location.search);
    const color = params.get("color");
    const size = params.get("size");

    const isInWishlist = user.wishlist.some(e => e.item === product._id && e.color.name === color && e.size === size);

    if(isInWishlist) {
      setIsWishlisted(true);
    } else {
      setIsWishlisted(false);
    }

  }, [product, user, location.search])


  useEffect(() => {
    history.push({
      search: `?color=${selectedColor.name}&size=${selectedSize}`
    })
  }, [selectedColor, selectedSize])


  const handleToggleWishlist = () => {
    handleSubmitSavedItem("wishlist");
    if(isWishlisted) {
      toast("Removed item from wishlist");
    } else {
      toast.success("Added item to wishlist");
    };
    setIsWishlisted(bool => !bool);
    setTimeout(() => focusRef.current.focus(), 250);
  }

  const handleSubmitSavedItem = async (type) => {

    const res = await fetch(`/api/saved-products/${product._id}?type=${type}`, {
      ...(type === "wishlist" && {method: isWishlisted ? "DELETE" : "POST"}),
      ...(type === "cart" && {method: isCarted ? "DELETE": "POST"}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({color: selectedColor, size: selectedSize})
    })
    const data = await res.json();

    console.log(data.wishlist)
    setUser({
      ...user,
      ...(data.cart && {card: data.cart}),
      ...(data.wishlist && {wishlist: data.wishlist}),
    });
  }

  useEffect(() => {
    console.log(user)
  }, [user])

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
          <button className="go-back-btn" onClick={() => history.push({
                pathname: '/',
                state: product.gender
            }) }>
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
              {product.colors && product.colors.map(color => {
                return (
                  <li key={color.name} style={{background: color.hex}} onClick={() => setSelectedColor({name: color.name, hex: color.hex})}>
                    <div className="selected" style={selectedColor.name === color.name ? null : {display: "none"}}>
                      <i className="fas fa-check"></i>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="options-container">
            <label>Size</label>
            <ul className="size-list">
              {product.sizes && product.sizes.map(size => {
                return (
                  <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
                ) 
                })
              }
            </ul>
          </div>
        </div>
        <div className="bottom-whitespace"></div>
        <button className="checkout-btn" onClick={() => toast.success("Added item to cart")}>
          <i className="fas fa-shopping-bag"></i>
          <span>Add to cart</span> 
        </button>
    </div>
  )
}

export default Product