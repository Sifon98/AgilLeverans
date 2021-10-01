import React, { useState, useContext, useEffect } from 'react'
import { NavContext } from "../context/NavContext";
import { UserContext } from "../context/UserContext";
import DesktopHeader from "../components/DesktopHeader";
import SideMenu from "../components/SideMenu";


function Wishlist() {
  const { setNav } = useContext(NavContext);
  const { user, setUser } = useContext(UserContext);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchWishlist();
  }, [user])

  // useEffect(() => {
  //   user && setProducts(user.wishlist);
  // }, [user])

  const fetchWishlist = async () => {
    const res = await fetch("/api/saved-products?type=wishlist");
    const data = await res.json();
    let product = data.products.filter(x => x.item !== null);

    // Set total price & find imageIndex for each product 
    // (each product has an unique color, and an image corresponding to each color)
    let total = 0;
    product = product.map(x => {
        const countPrice = x.item.price * x.count;
        total += countPrice;
        return {...x, countPrice: parseFloat(countPrice.toFixed(2)), imageIndex: x.item.colors.findIndex(c => c.name === x.color.name)}
    })

    setProducts(product);
  }

  const removeItem = async (id) => {

    const res = await fetch(`/api/saved-products/${id}?type=wishlist`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    await res;

    // Update products
    const UpdateProducts = [...products].filter(x => x._id !== id);

    // Update total price
    let total = 0;
    UpdateProducts.forEach((x) => {
        total += x.item.price * x.count
    })

    // Set State
    setProducts(UpdateProducts);
    setUser({
        ...user,
        wishlist: UpdateProducts
    })
  }

  const addWishlistToCart = async () => {
    const res = await fetch("/api/add-wishlist-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ products })
    })
    const data = await res.json();
    setUser({
      ...user,
      cart: data.cart
    })
    setNav({path: "/cart", direction: 1})
  }

  const clearWishlist = async () => {
    const res = await fetch("/api/clear-wishlist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
    const data = await res.json();
    setUser({
      ...user,
      wishlist: data.wishlist
    })
  }

  return (
    <div className="page">
      <DesktopHeader wishlist={true}/>
      <SideMenu backArrow={true} backPath="/go-back"/>
      <div className="wishlistText">
        <h1 className="wishlistTitle">your wishlist.</h1>
      </div>
      <div className="wishlistContainer">
        {products != null ? products.length > 0 ? <div className="top-buttons">
          <button onClick={() => clearWishlist()} className="clear-wishlist">CLEAR WISHLIST</button>
          {/* <button className="import-wishlist"><i className="fas fa-file-import"></i></button> */}
        </div> : null : null}

        {
        products && products.map(x => (
        <div className="item" key={x._id}>
          <img alt="image"  className="itemPic" src={x.item.images[x.imageIndex]}></img>
          <div className="product-info-wrapper">
            <p className="cartText">{x.item.name}</p>
            <p className="cartRef">ref: {x._id.substring(0, 8)}</p>
            <div className="circle-box-wrapper">
              <div className="color-box" style={{background: x.color.hex}}></div>
              <div className="size-box">{x.size}</div> 
            </div>
          </div>
          <p className="priceTag">${x.countPrice}</p>
          <div className="remove-item-btn" onClick={() => removeItem(x._id)}>
            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
            </svg>
          </div>
          {/* <div className="addToCart" onClick={() => handleToggleCart()}>ADD TO CART</div> */}
        </div>
        ))
        }
        {products != null ? products.length > 0 ? null : <div className="no-wishlist-items">You have no products in you wishlist, go shopping!</div> : null}
        {products != null ? products.length > 0 ? <div className="buttons-container">
          {/* <button>SAVE WISHLIST</button> */}
          <button onClick={() => addWishlistToCart()}>ADD LIST TO CART <i className="fas fa-arrow-right"></i></button>
        </div> : null : null}

      </div>

    </div>
  )
}

export default Wishlist