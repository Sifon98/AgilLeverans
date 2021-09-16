import React, {useEffect, useState, useRef, useContext} from 'react'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/UserContext";
import { getParams, getIsParamsValid } from "../utils/product-page";
import ImageContainer from '../components/ProductPage/ImageContainer';
import InfoContainer from '../components/ProductPage/InfoContainer';
import OptionsContainer from '../components/ProductPage/OptionsContainer/OptionsContainer';
import CheckoutButton from '../components/ProductPage/CheckoutButton';
import { NavContext } from "../context/NavContext";

function Product() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setNav } = useContext(NavContext);

  const descriptionRef = useRef(null);
  const focusRef = useRef(null);

  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCarted, setIsCarted] = useState(false);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    // Get params from url
    const { color, size } = getParams(location);

    // Fetch product
    const getProduct = async () => {
      const productId = location.pathname.replace("/products/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
      console.log(data.product)
      setProduct(data.product);
      setCurrentProductOptions(color, size, data.product);
    }
    getProduct();
  }, [])

  // Set Description's max-height
  useEffect(() => {
    if(descriptionRef.current) {
      setDescHeight(descriptionRef.current.offsetHeight)
    }
  }, [product]);

  // Set search params in url when product options changes
  useEffect(() => {
    history.push({
      search: `?color=${selectedColor.name}&size=${selectedSize}`
    })
  }, [selectedColor, selectedSize])

  // Set is wishlisted and carted
  useEffect(() => {
    if(!user.wishlist) return;
    if(!user.cart) return;

    // console.log(user.cart)

    // Get params from url
    const { color, size } = getParams(location);
    const isInWishlist = user.wishlist.some(e => e.item === product._id && e.color.name === color && e.size === size);
    const isInCart = user.cart.some(e => e.item === product._id && e.color.name === color && e.size === size);

    isInWishlist ? setIsWishlisted(true) : setIsWishlisted(false);
    isInCart ? setIsCarted(true) : setIsCarted(false);

  }, [product, user, location.search]);

  const handleToggleWishlist = () => {
    // Submit to server
    handleSubmitSavedItem("wishlist");
    // Change client's state
    handleSubmitWishlistUI();
  }

  const handleToggleCart = () => {
    // Submit to server
    handleSubmitSavedItem("cart");
    // Change client's state
    handleSubmitCartUI();
  }

  // Handle submit Wishlist OR Cart
  const handleSubmitSavedItem = async (type) => {

    // Inline && and Ternary operator to see what we should send to server,
    // We have 4 Possibilities: POST - Wishlist | DELETE - Wishlist | POST - Cart | DELETE - Cart
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

    console.log(data.cart)

    setUser({
      ...user,
      ...(data.cart && {cart: data.cart}),
      ...(data.wishlist && {wishlist: data.wishlist}),
    });
  }

  // UTILITIES

  // Set product's current Color & Size
  const setCurrentProductOptions = (color, size, product) => {
    // Check if search params is valid
    const { isColorValid, hex, isSizeValid } = getIsParamsValid(color, size, product);
    // If search params is valid, set product to those options, else set product to its first options
    setSelectedColor({
      ...(isColorValid && {name: color, hex, index: product.colors.findIndex(c => c.name === color)}),
      ...(!isColorValid && {name: product.colors[0].name, hex: product.colors[0].hex, index: 0}),
    });
    setSelectedSize(isSizeValid ? size : product.sizes[0]);
  };

  // Show toast and change heart icon state.
  const handleSubmitWishlistUI = () => {
    if(isWishlisted) {
      toast("Removed item from wishlist");
    } else {
      toast.success("Added item to wishlist");
    };
    setIsWishlisted(bool => !bool);
    // Unfocuses heart to remove the "clicked down" animation
    setTimeout(() => focusRef.current.focus(), 250);
  }

  const handleSubmitCartUI = () => {
    if(isCarted) {
      toast("Removed item from cart");
    } else {
      toast.success("Added item to cart");
    }
    setIsCarted(bool => !bool);
  }

  return (
    <div className="product-page page">
        <ToastContainer 
          position="top-center" 
          autoClose={2500} 
          hideProgressBar 
          pauseOnHover={false}
          pauseOnFocusLoss={false}
           />
        <ImageContainer 
          product={product} isWishlist ed={isWishlisted} handleToggleWishlist={handleToggleWishlist} focusRef={focusRef} selectedColor={selectedColor}
          /> 
        <div className="wrapper">
          <InfoContainer 
            product={product} showFullDesc={showFullDesc} setShowFullDesc={setShowFullDesc} descHeight={descHeight} 
            descriptionRef={descriptionRef}
            />
          <OptionsContainer 
            product={product} selectedColor={selectedColor} selectedSize={selectedSize} setSelectedColor={setSelectedColor} 
            setSelectedSize={setSelectedSize} 
            />
        </div>
        <div className="bottom-whitespace"></div>
        <CheckoutButton handleToggleCart={handleToggleCart} isCarted={isCarted} />
    </div>
  )
}

export default Product