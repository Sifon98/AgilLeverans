import React, { useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { useHistory } from "react-router-dom";


function Home() {
  const history = useHistory();
  const [products, setProducts] = useState([]); 
  const [dropdown, setDropdown] = useState([]); 
  const [categoryCheck, setCategoryCheck] = useState([]); 
  const [category, setCategory] = useState([]); 

  const fetchProducts = async () => {
    // const res = await fetch('/api/products');
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    console.log(data);
    setProducts(data.products);
    setCategoryCheck(false)
    setDropdown(false)
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

  useEffect(() => fetchProducts(), [])

  return (
    <div>
      <div className="header">
        <i className="fas fa-user-circle" onClick={() => history.push("/profile")}></i>
        <img src={logo} />
        {/* <i className="fas fa-shopping-cart"></i> */}
        <i class="fas fa-shopping-bag"></i>
      </div>

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
      
      <div className="container">
          {
            categoryCheck ? products.map(Product => (
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
              </div> : null
            ))
            : products.map(Product => (
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
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Home