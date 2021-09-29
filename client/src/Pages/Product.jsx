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
import SideMenu from '../components/SideMenu';
import DesktopHeader from '../components/DesktopHeader';

function Product() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { nav, setNav } = useContext(NavContext);

  const descriptionRef = useRef(null);
  const focusRef = useRef(null);

  const [reloadFetch, setReloadFetch] = useState(false);
  const [showProdInfo, setShowProdInfo] = useState(false);
  const [popupLogin, setPopupLogin] = useState(false);

  const [product, setProduct] = useState({});
  const [moreProducts, setMoreProducts] = useState([]);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCarted, setIsCarted] = useState(false);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    console.log(history.location)
    // Get params from url
    const { color, size } = getParams(location);

    // Fetch product
    const getProduct = async () => {
      const productId = location.pathname.replace("/products/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
      setProduct(data.product);
      setMoreProducts(data.randomProducts);
      setCurrentProductOptions(color, size, data.product);
    }
    getProduct();
  }, [reloadFetch])

  useEffect(() => {
    if(nav.path.includes("products")) {
      setReloadFetch(bool => !bool);
      window.scrollTo({top:0,left:0,behavior: 'smooth'});
    }
  }, [nav])

  useEffect(() => {
    setTimeout(() => {
      setShowProdInfo(true);
    }, 100)
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
    if(!user) return;
    if(!user.wishlist) return;
    if(!user.cart) return;

    const { color, size } = getParams(location);

    const isInWishlist = user.wishlist.some(e => e.item === product._id && e.color.name === color && e.size === size);
    const isInCart = user.cart.some(e => e.item === product._id && e.color.name === color && e.size === size);

    isInWishlist ? setIsWishlisted(true) : setIsWishlisted(false);
    isInCart ? setIsCarted(true) : setIsCarted(false);

  }, [product, location.search]);

  const handleToggleWishlist = () => {
    if (!user) return;
    // Submit to server
    handleSubmitSavedItem("wishlist");
    // Change client's state
    handleSubmitWishlistUI();
  }

  const handleToggleCart = () => {
    if (!user) return;
    // Submit to server
    handleSubmitSavedItem("cart");
    // Change client's state
    handleSubmitCartUI();
  }

  // Handle submit Wishlist OR Cart
  const handleSubmitSavedItem = async (type) => {

    // Inline && and Ternary operator to see what we should send to server,
    // We have 4 Possibilities: POST - Wishlist | DELETE - Wishlist | POST - Cart | DELETE - Cart
    const { color, size } = getParams(location);
    let productId = null;
    if (type === "wishlist" && isWishlisted) {
      productId = user.wishlist.find(x => x.item === product._id && x.color.name === color && x.size === size)._id;
    }
    if (type === "cart" && isCarted) {
      productId = user.cart.find(x => x.item === product._id && x.color.name === color && x.size === size)._id;
    }
    
    const res = await fetch(`/api/saved-products/${productId || product._id}?type=${type}`, {
      ...(type === "wishlist" && {method: isWishlisted ? "DELETE" : "POST"}),
      ...(type === "cart" && {method: isCarted ? "DELETE": "POST"}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({color: selectedColor, size: selectedSize})
    })
    const data = await res.json();

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

  useEffect(() => {
    console.log(isWishlisted);
  }, [isWishlisted])

  const popupLoginFunc = (e) => {
    e.stopPropagation();
    setPopupLogin(true)
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
      <SideMenu backArrow="/home" />
      <DesktopHeader popupLoginFunc={popupLoginFunc} />
      <div className="content-wrapper">
        <div className="desktop-wrapper">
          <div className="section">
            <ImageContainer 
              product={product} isWishlisted={isWishlisted} focusRef={focusRef} selectedColor={selectedColor} reloadFetch={reloadFetch}
              />
            <div className="wrapper" style={showProdInfo ? {opacity: "1"} : null}>
              <InfoContainer 
                product={product} showFullDesc={showFullDesc} setShowFullDesc={setShowFullDesc} descHeight={descHeight} 
                descriptionRef={descriptionRef}
                />
              <OptionsContainer 
                product={product} selectedColor={selectedColor} selectedSize={selectedSize} setSelectedColor={setSelectedColor} 
                setSelectedSize={setSelectedSize} 
                />
              <CheckoutButton handleToggleCart={handleToggleCart} isCarted={isCarted} />
              <button className="wishlist-btn" onMouseDown={() => handleToggleWishlist()}>
                <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
              </button>
            </div>
          </div>

          <div className="others-also-bought">
            <label>others also bought.</label>
            <ul>
              {moreProducts && moreProducts.map(x => (
                <li key={x._id} onClick={() => setNav({path: `/products/${x._id}`, direction: 1})}>
                  <img src={x.images[0]} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-whitespace"></div>
        <CheckoutButton handleToggleCart={handleToggleCart} isCarted={isCarted} />
      </div>
    </div>
  )
}

export default Product