import React, { useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";


function Home() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const [dropdownFilter, setDropdownFilter] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState([]); 
  const [category, setCategory] = useState([]); 
  const [gender, setGender] = useState([]); 

  const fetchProducts = async () => {
    setCategoryCheck(false)
    setDropdown(false)
    setDropdownFilter(false)
    
    let initialGender = history.location.state
    if (initialGender == null) {
      initialGender = 0;
    }
    setGender(initialGender)
    // const res = await fetch('/api/products');
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    setProducts(data.products);
    console.log(data.products)
  }

  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true)
  }

  const chooseCategory = (e) => {
    const id = e.target.id
    id == 99 ? 
      setCategoryCheck(false) 
      : setCategoryCheck(true)
      setDropdown(false)
      setCategory(id)
  }

  const toggleDropdownFilter = () => {
    dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true)
  }

  const chooseFilter = (e) => {
    const id = e.target.id

    history.push({ state: id })
    setDropdownFilter(false)
    setGender(id)
  }

  useEffect(() => fetchProducts(), [])

  return (
    <div>
      <div className="header">
        <i className="fas fa-user-circle" onClick={() => history.push("/profile")}></i>
        <img src={logo} />
        {/* <i className="fas fa-shopping-cart"></i> */}
        <i className="fas fa-shopping-bag"></i>
      </div>

      <div className="sorting-buttons">
        <div className="dropdown-container">
          <button type="button" className="button" onClick={toggleDropdown}>KATEGORI</button>
            {dropdown && <div className="dropdown">
              <ul>
                <li id={99} onClick={chooseCategory}>All items</li>
                <li id={0} onClick={chooseCategory}>Shirts</li>
                <li id={1} onClick={chooseCategory}>Pants</li>
                <li id={2} onClick={chooseCategory}>Shoes</li>
              </ul>
            </div>}
        </div>
        <div className="dropdown-container-filter">
          <button type="button" className="button-filter" onClick={toggleDropdownFilter}>FILTER</button>
            {dropdownFilter && <div className="dropdown-filter">
              <ul>
                <li id={0} onClick={chooseFilter}>men.</li>
                <li id={1} onClick={chooseFilter}>women.</li>
              </ul>
            </div>}
        </div>
      </div>
      
      <div className="container">
          {
            categoryCheck ? products.map(Product => (
              Product.gender == gender ?
              Product.category == category ?
                <div key={Product._id} className="product" onClick={() => history.push(`/products/${Product._id}`)}>
                <img className="image" src={Product.image} />
                <div className="info-box">
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i>
                  </button>
                  <div className="text">
                    <p>{Product.name}</p>
                    <p>{Product.price} kr</p>
                  </div>
                </div>
              </div> : null : null
            ))
            : products.map(Product => (
              Product.gender == gender ?
              <div key={Product._id} className="product" onClick={() => history.push(`/products/${Product._id}`)}>
                <img className="image" src={Product.image} />
                <div className="info-box">
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i>
                  </button>
                  <div className="text">
                    <p>{Product.name}</p>
                    <p>{Product.price} kr</p>
                  </div>
                </div>
              </div> : null
            ))
          }
      </div>
    </div>
  )
}

export default Home