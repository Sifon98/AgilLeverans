import React, {useEffect, useState, useRef} from 'react'


function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


function Product() {
  const descriptionRef = useRef(null);

  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [descHeight, setDescHeight] = useState(1000);

  useEffect(() => {
    const getProduct = async () => {
      const productId = location.pathname.replace("/product/", "");
      const data = await (await fetch(`/api/products/${productId}`)).json();
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
        </div>
        <div className="wrapper">
          <div className="info-container">
            <div className="container">
              <div className="name">{product.name}</div>
              <div className="price">${product.price}.00</div>
            </div>
            <p
            className="description" 
            style={{maxHeight: `${descHeight}px`}} 
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
            <ul>
              <li style={{background: "#CDC0B7"}}></li>
              <li style={{background: "#772828"}}></li>
              <li style={{background: "#000000"}}></li>
            </ul>
          </div>
          <div className="options-container">
            <label>Size</label>
            <ul>
              <li className="size-btn">S</li>
              <li className="size-btn">M</li>
              <li className="size-btn">L</li>
            </ul>
          </div>
        </div>
        <div className="bottom-whitespace"></div>
        <button className="checkout-btn">Add to cart</button>
    </div>
  )
}

export default Product