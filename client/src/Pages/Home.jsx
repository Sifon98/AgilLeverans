import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import ListProducts from '../components/HomePage/ListProducts'
import { UserContext } from "../context/UserContext";
import LoginHome from "../components/HomePage/LoginHome"
import SideMenu from "../components/SideMenu"
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/HomePage/MobileHeader';
import SortingButtons from '../components/HomePage/SortingButtons';
import RegisterHome from '../components/HomePage/RegisterHome';


function Home() {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState([]);
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupRegister, setPopupRegister] = useState(false);

  const [products, setProducts] = useState([]);
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

  // Fetch products and make sure that certain conditions are false
  const fetchProducts = async () => {
    setDropdown(false);
    setDropdownFilter(false);

    console.log(user)
    
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
    
    if(user == null) {
      setLoggedIn(false)
    }else {
      setLoggedIn(true)
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

  const popupLoginFunc = (e) => {
    e.stopPropagation();
    setPopupLogin(true)
  }

  const changePopup = () => {
    if(popupLogin == true){
      setPopupLogin(false)
      setPopupRegister(true)
    }else if(popupRegister == true) {
      setPopupLogin(true)
      setPopupRegister(false)
    }
  }

  useEffect(() => fetchProducts(), []);
  
  return (
    <div className="page" style={{overflowY: "scroll"}}>
      {/* <div className="header"> */}
        {/* Different menus/headers depending on if the user is on deskyop or mobile */}
        <SideMenu chooseFilter={chooseFilter} chooseCategory={chooseCategory} products={products} removeFilter={removeFilter} 
          chooseColor={chooseColor} chooseSize={chooseSize} size={size} color={color}/>
        <DesktopHeader popupLoginFunc={popupLoginFunc} loggedIn={loggedIn} />
        <MobileHeader />
      {/* </div> */}
      {/* Buttons that sort via categories or gender */}
      <SortingButtons toggleDropdown={toggleDropdown} toggleDropdownFilter={toggleDropdownFilter} dropdown={dropdown} 
        chooseCategory={chooseCategory} category={category} dropdownFilter={dropdownFilter} chooseFilter={chooseFilter} products={products}
        removeFilter={removeFilter} size={size} color={color} chooseColor={chooseColor} chooseSize={chooseSize} />
      {/* Change titel depending on the categorie and gender */}
      <h1 className="browsing">{ gender == 1 ? "women." : "men." } { category == 0 ? "shirts." : category == 1 ? "pants." : category == 2 ? "shoes." : null }</h1>
      {/* The list of all the products matching the given parameters */}
      <div className="home-container">
          <ListProducts categoryCheck={categoryCheck} products={products} gender={gender} category={category} color={color} 
          colorCheck={colorCheck} size={size} sizeCheck={sizeCheck} loggedIn={loggedIn} popupLoginFunc={popupLoginFunc} />
      </div>
      <LoginHome popupLogin={popupLogin} setPopupLogin={setPopupLogin} changePopup={changePopup}/>
      <RegisterHome popupRegister={popupRegister} setPopupRegister={setPopupRegister} changePopup={changePopup} />
    </div>
  )
}

export default Home