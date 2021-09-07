import React, {useEffect, useState} from 'react'

function Product() {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productId = location.pathname.replace("/product/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
      setProduct(data.product)
    }
    getProduct();
  }, [])


  return (
    <div className="product-page">
        <div className="image-container">
          <img src={product.image} alt="product image" />
        </div>
        <div className="wrapper">
          <div className="info-container">
            <div className="container">
              <div className="name">{product.name}</div>
              <div className="price">${product.price}.00</div>
            </div>
            <p className="description">
            {product.description}
            </p>
          </div>
          <div className="color-container">
            <label>Color</label>
            <ul>
              <li style={{background: "#CDC0B7"}}></li>
              <li style={{background: "#772828"}}></li>
              <li style={{background: "#000000"}}></li>
            </ul>
          </div>
          <div className="size-container">
            <label>Size</label>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
            </ul>
          </div>
          <button className="checkout-btn">Add to cart</button>
        </div>
    </div>
  )
}

export default Product