import React, { useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";
import ListProducts from '../components/ListProducts'


function Home() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  // Dropdown for categories
  const [dropdown, setDropdown] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState([]); 
  const [category, setCategory] = useState([]); 
  // Dropdown for filter
  const [dropdownFilter, setDropdownFilter] = useState([]);
  const [gender, setGender] = useState([]); 
  const [color, setColor] = useState([]);
  const [colorCheck, setColorCheck] = useState([]);

  // Fetch products and make sure that certain conditions are false
  const fetchProducts = async () => {
    setColorCheck(false);
    setCategoryCheck(false);
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
  }

  const chooseColor = (e) => {
    const id = e.target.id;

    setColor(id)
    setColorCheck(true);
    setDropdown(false);
  }

  // Toggle category dropdown and then choose the category
  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  }

  const chooseCategory = (e) => {
    const id = e.target.id;
    id == 99 ? 
      setCategoryCheck(false) 
      : setCategoryCheck(true);
      setDropdown(false);
      setCategory(id);
  }

  // Toggle filter dropdown and then choose the gender, color or size
  const toggleDropdownFilter = () => {
    dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true)
  }

  const chooseFilter = (e) => {
    const id = e.target.id;

    history.push({ state: id });
    setDropdownFilter(false);
    setGender(id);
  }

  useEffect(() => fetchProducts(), []);

  return (
    <div>
      <div className="header">
        <i className="fas fa-user-circle" onClick={() => history.push("/profile")}></i>
        <img src={logo} />
        <i className="fas fa-shopping-bag"></i>
      </div>
      {/* Buttons that sort via categories or gender */}
      <div className="sorting-buttons">
        <div className="dropdown-container">
          <button type="button" className="button" onClick={toggleDropdown}>KATEGORI <i className="fas fa-chevron-down"></i></button>
            {dropdown && <div className="dropdown">
              <ul>
                <li id={99} onClick={chooseCategory}>All items</li>
                <li id={0} onClick={chooseCategory}>Shirts</li>
                <li id={1} onClick={chooseCategory}>Pants</li>
                <li id={2} onClick={chooseCategory}>Shoes</li>
              </ul>
            </div>}
        </div>
        <div className="line" />
        <div className="dropdown-container-filter">
          <button type="button" className="button-filter" onClick={toggleDropdownFilter}>FILTER <i className="fas fa-sliders-h"></i></button>
            {dropdownFilter && <div className="dropdown-filter">
              <ul>
                <li id={0} onClick={chooseFilter}>men.</li>
                <li id={1} onClick={chooseFilter}>women.</li>
              </ul>
              <ul>
                <li id={"Navy"} onClick={chooseColor}>Navy</li>
                <li id={"Red"} onClick={chooseColor}>Red</li>
              </ul>
            </div>}
        </div>
      </div>
      {/* Change titel depending on the categorie and gender */}
      <h1 className="browsing">{ gender == 1 ? "women." : "men." } { category == 0 ? "shirts." : category == 1 ? "pants." : category == 2 ? "shoes." : null }</h1>
      {/* The list of all the products matching the given parameters */}
      <div className="container">
          <ListProducts categoryCheck={categoryCheck} products={products} gender={gender} category={category} color={color} colorCheck={colorCheck} />
      </div>
    </div>
  )
}

export default Home