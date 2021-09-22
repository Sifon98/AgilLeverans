import React, { useState, useEffect, useContext } from 'react'
import logoLarge from "../img/logo-large.svg"
import logo from "../img/logo.svg"
import { useHistory } from "react-router-dom";
import ListProducts from '../components/HomePage/ListProducts'
import { NavContext } from "../context/NavContext";
import { UserContext } from "../context/UserContext"


function Home() {
  const history = useHistory();

  const { setNav } = useContext(NavContext);
  const { user } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState([]);
  const [popupLogin, setPopupLogin] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Dropdown for categories
  const [dropdown, setDropdown] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState(false); 
  const [category, setCategory] = useState(99); 
  // Dropdown for filter
  const [dropdownFilter, setDropdownFilter] = useState([]);
  const [gender, setGender] = useState([]); 
  const [color, setColor] = useState([]);
  const [colorCheck, setColorCheck] = useState(false);
  const [size, setSize] = useState([]);
  const [sizeCheck, setSizeCheck] = useState(false);
  const [visible, setVisible] = useState(false)

  // Scroll to top function
  useEffect(() => {
    let mounted = true
    var toggleVisible = document.addEventListener("scroll", e => {
      if (mounted) {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){
          setVisible(true)
        } 
        else if (scrolled <= 200){
          setVisible(false)
        }
      }
    })

    return () => {
      document.removeEventListener("scroll", toggleVisible)
      mounted = false
    }
  }, [visible])
  
  const scrollToTop = () => {
    if (visible == true){
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }else {
      console.log("No action until scroll");
    }
  };

  // Fetch products and make sure that certain conditions are false
  const fetchProducts = async () => {
    setDropdown(false);
    setDropdownFilter(false);
    
    // Check gender and apply male (0) if for some reason gender is empty
    let initialGender = history.location.state;
    if (initialGender == null) {
      initialGender = 0;
    }
    setGender(initialGender);

    // const res = await fetch('/api/products');
    const res = await fetch('/api/products');
    const data = await res.json();
    console.log(data.products);

    setProducts(data.products);
    setLoading(false)
    
    if(user == null) {
      setLoggedIn(false)
    }else {
      setLoggedIn(false)
    }
  }

  const chooseColor = (e) => {
    const id = e.target.id;

    setColor(id)
    setColorCheck(true);
    setSizeCheck(false);
    setSize("");
  }

  const chooseSize = (e) => {
    const id = e.target.id;

    setSize(id)
    setSizeCheck(true);
    setColorCheck(false);
    setColor("");
  }

  const chooseCategory = (e) => {
    const id = e.target.id;
    id == 99 ? 
      setCategoryCheck(false)
      : setCategoryCheck(true);
      setCategory(id);
  }

  // Toggle category dropdown and then choose the category
  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
    dropdownFilter && setDropdownFilter(false);
  }

  // Toggle filter dropdown and then choose the gender, color or size
  const toggleDropdownFilter = () => {
    dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true)
    dropdown && setDropdown(false);
  }

  const chooseFilter = (e) => {
    const id = e.target.id;

    history.push({ state: id });
    setGender(id);
  }

  const removeFilter = () => {
    setColorCheck(false);
    setSizeCheck(false);
    setColor("");
    setSize("");
  }

  const popupLoginFunc = () => {
    setPopupLogin(true)
  }

  useEffect(() => fetchProducts(), []);
  
  return (
    <div className="page">
      <div className="header">
        <div className="menuToggle">
          <input type="checkbox" />
          {/* Hamburger menu */}
          <span></span>
          <span></span>
          <span></span>
          {/* List when menu is opened */}
          <ul className="menu">
            <li id={0} onClick={chooseFilter} className="topText bold text">men.</li>
            <li id={1} onClick={chooseFilter} className="bold text">women.</li>
            <div className="divider" />
            <li id={99} onClick={chooseCategory} className="bold text">all items.</li>
            <li id={0} onClick={chooseCategory} className="text">Shirts</li>
            <li id={1} onClick={chooseCategory} className="text">Pants</li>
            <li id={2} onClick={chooseCategory} className="text">Shoes</li>
            <div className="divider" />
            <div className="helper">
            {products[0] && products[0].colors.map(Color => (
              <li id={Color.name} onClick={chooseColor} key={Color.name} style={{background: Color.hex}} className="choose-color">
                <div className="selected-color" style={color === Color.name ? null : {display: "none"}}>
                  <i className="fas fa-check"></i>
                </div>
              </li>
            ))}
            {products[0] && products[0].sizes.map(Sizes => (
              <li id={Sizes} key={Sizes} onClick={chooseSize} className={`choose-size ${Sizes === size ? "selected-size" : ""}`}>{Sizes}</li>
              // <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
            ))}
            </div>
            <li onClick={removeFilter} className="bold text">clear filters.</li>
          </ul>
        </div>
        <div className="desktopHeader">
          <img src={logoLarge} />
          <div className="helper">
            <div className="icons">
              <i className="fas fa-user-circle" onClick={loggedIn ? () => setNav({path: "/profile", direction: 1}) : () => popupLoginFunc()} ></i>
            </div>
            <div className="icons">
              <button className="shopping-cart-btn">
              <i className="fas fa-shopping-bag" onClick={() => setNav({path: "/cart", direction: 1})}></i>
                {user.cart && user.cart.length > 0 ? (
                  <div className="cart-count-home">{user.cart.length}</div>
                ):null}
              </button>
            </div>
          </div>
        </div>
        <div className="mobileHeader">
          <i className="fas fa-user-circle" onClick={() => setNav({path: "/profile", direction: 1})}></i>
          <h1 className ="profileTitle">bopshop.</h1>
          <button className="shopping-cart-btn">
          <i className="fas fa-shopping-bag" onClick={() => setNav({path: "/cart", direction: 1})}></i>
            {user.cart && user.cart.length > 0 ? (
              <div className="cart-count">{user.cart.length}</div>
            ):null}
          </button>
        </div>
      </div>
      {/* Buttons that sort via categories or gender */}
      <div className="sorting-buttons">
        <div className="dropdown-container">
          <button type="button" className="button" onClick={toggleDropdown}>KATEGORI <i className="fas fa-chevron-down"></i></button>
        </div>
        <div className="line" />
        <div className="dropdown-container-filter">
          <button type="button" className="button-filter" onClick={toggleDropdownFilter}>FILTER <i className="fas fa-sliders-h"></i></button>
        </div>
      </div>
        {dropdown && <div className="dropdown">
          <ul>
            <li id={99} onClick={chooseCategory} className="bold">all items.</li>
            <li id={0} onClick={chooseCategory}>Shirts</li>
            <li id={1} onClick={chooseCategory}>Pants</li>
            <li id={2} onClick={chooseCategory}>Shoes</li>
          </ul>
        </div>}
        {dropdown && 
          <div className="selected-container">
            <div className="selected-width">
              <div className={`${category == 99 ? "selected-allitems" : category == 0 ? "selected-shirts" : category == 1 ? "selected-pants" : category == 2 ? "selected-shoes" : "unselected"}`}></div>
            </div>
          </div>}
        {dropdownFilter && <div className="dropdown-filter">
          <ul className="gender-ul">
            <li id={0} onClick={chooseFilter} className="bold">men.</li>
            <li id={1} onClick={chooseFilter} className="bold">women.</li>
          </ul>
          <div className="divider" />
          <ul className="filter-ul">
            {products[0] && products[0].colors.map(Color => (
              <li id={Color.name} onClick={chooseColor} key={Color.name} style={{background: Color.hex}} className="choose-color">
                <div className="selected-color" style={color === Color.name ? null : {display: "none"}}>
                  <i className="fas fa-check"></i>
                </div>
              </li>
            ))}
            {products[0] && products[0].sizes.map(Sizes => (
              <li id={Sizes} key={Sizes} onClick={chooseSize} className={`choose-size ${Sizes === size ? "selected-size" : ""}`}>{Sizes}</li>
              // <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
            ))}
          </ul>
          <div className="divider" />
          <ul className="remove-ul">
            <li onClick={removeFilter} className="bold">clear filters.</li>
          </ul>
        </div>}
      {/* Change titel depending on the categorie and gender */}
      <h1 className="browsing">{ gender == 1 ? "women." : "men." } { category == 0 ? "shirts." : category == 1 ? "pants." : category == 2 ? "shoes." : null }</h1>
      {/* The list of all the products matching the given parameters */}
      <div className="home-container">
          <ListProducts categoryCheck={categoryCheck} products={products} gender={gender} category={category} color={color} colorCheck={colorCheck} size={size} sizeCheck={sizeCheck} />
      </div>
      <button className={`${ visible ? "visible" : "invisible"}`} onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
      {popupLogin && 
        <div className="popupContainer">
          <div className="box">
            <h1>login.</h1>
            <form className="formLogin">
              <input
                className="inputLogin"
                type="text"
                name="username"
                placeholder="username"
                required
              />
              <input
                className="inputLogin"
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <button className="loginButton">login.</button>
              <p className="registerText">Don't have an account?</p>
              <button className="registerLink" 
                onClick={(e) => {
                  e.preventDefault();
                  setNav({path: "/register", direction: 1});
                }}>
                Register here
              </button>
            </form>
          </div>
        </div>}
    </div>
  )
}

export default Home