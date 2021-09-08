import React, {useEffect, useState, useRef} from 'react'

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


function Product() {
  const descriptionRef = useRef(null);

  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  // const [color, setColor] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const productId = location.pathname.replace("/products/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
      console.log(data.product)
      setProduct(data.product)
    }
    getProduct();
  }, [])


  useEffect(() => {
    if(descriptionRef.current) {
      setDescHeight(descriptionRef.current.offsetHeight)
    }
  }, [product])


  return (
    <div className="product-page">
        <div className="image-container">
          <img src={product.image} alt="product image" />
          <button className="wishlist-btn">
            {/* <i icon={faHeart} /><i/> */}
            <i className="far fa-heart"></i>
          </button>
        </div>

        <div className="wrapper">
          <div className="info-container">
            <div className="container">
              <div className="name">{product.name}</div>
              <div className="price">${product.price}.00</div>
            </div>
            <p
            className="description" 
            style={showFullDesc ? {maxHeight: "1000px"} : {maxHeight: `${descHeight}px`}} 
            ref={descriptionRef}>
            {!isEmpty(product) && (
            <>
              {showFullDesc ? product.description : product.description.substring(0, 300)}
              {!showFullDesc && product.description.length > 300 ? (
                <span className="show-more" onClick={() => setShowFullDesc(true)}> Show more...</span>
              ):null}
            </>
            )}
            </p>
          </div>
          <div className="options-container">
            <label>Color</label>
            <ul className="color-list">
              <li style={{background: "#CDC0B7"}}>
                <div className="selected">
                  <i className="fas fa-check"></i>
                </div>
              </li>
              <li style={{background: "#772828"}}>
              </li>
              <li style={{background: "#000000"}}>
              </li>
            </ul>
          </div>
          <div className="options-container">
            <label>Size</label>
            <ul className="size-list">
              <li className="size-btn selected">S</li>
              <li className="size-btn">M</li>
              <li className="size-btn">L</li>
            </ul>
          </div>
        </div>
        <div className="bottom-whitespace"></div>
        <button className="checkout-btn">
          <i className="fas fa-shopping-bag"></i>
          <span>Add to cart</span> 
        </button>
    </div>
  )
}

export default Product