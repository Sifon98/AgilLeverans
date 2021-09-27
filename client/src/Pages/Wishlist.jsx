import React, { useState, useContext, useEffect } from 'react'
import { NavContext } from "../context/NavContext";
import { UserContext } from "../context/UserContext";


function Wishlist() {
  const { setNav } = useContext(NavContext);
  const { user, setUser } = useContext(UserContext);

  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchWishlist();
  }, [])

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
    setTotalPrice(total.toFixed(2));
}

  return (
    <div className="page">
      <div className="wishlistContainer">
        {
        products && products.map(x => (
        <div className="item" key={x._id}>
          <img className="itemPic" src={x.item.images[x.imageIndex]}></img>
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
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default Wishlist