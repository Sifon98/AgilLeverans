import React, { useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";
import ListProducts from '../components/HomePage/ListProducts'


function Home() {
  const history = useHistory();
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

  useEffect(() => fetchProducts(), []);
  
  return (
    loading ? <div>Loading...</div> :
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
        {dropdown && <div className={`${category == 99 ? "selected-allitems" : category == 0 ? "selected-shirts" : category == 1 ? "selected-pants" : category == 2 ? "selected-shoes" : "unselected"}`}></div>}
        {dropdownFilter && <div className="dropdown-filter">
          <ul>
            <li id={0} onClick={chooseFilter} className="bold">men.</li>
            <li id={1} onClick={chooseFilter} className="bold">women.</li>
          </ul>
          <ul className="filter-ul">
            {products[0].colors.map(Color => (
              <li id={Color.name} onClick={chooseColor} key={Color.name} style={{background: Color.hex}} className="choose-color">
                <div className="selected-color" style={color === Color.name ? null : {display: "none"}}>
                  <i className="fas fa-check"></i>
                </div>
              </li>
            ))}
            {products[0].sizes.map(Sizes => (
              <li id={Sizes} key={Sizes} onClick={chooseSize} className={`choose-size ${Sizes === size ? "selected-size" : ""}`}>{Sizes}</li>
              // <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
            ))}
          </ul>
          <ul className="remove-ul">
            <li onClick={removeFilter} className="bold">clear filters.</li>
          </ul>
        </div>}
      {/* Change titel depending on the categorie and gender */}
      <h1 className="browsing">{ gender == 1 ? "women." : "men." } { category == 0 ? "shirts." : category == 1 ? "pants." : category == 2 ? "shoes." : null }</h1>
      {/* The list of all the products matching the given parameters */}
      <div className="container">
          <ListProducts categoryCheck={categoryCheck} products={products} gender={gender} category={category} color={color} colorCheck={colorCheck} size={size} sizeCheck={sizeCheck} />
      </div>
    </div>
  )
}

export default Home