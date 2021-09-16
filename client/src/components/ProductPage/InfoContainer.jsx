import React from 'react'
import { isEmpty } from '../../utils/product-page'

function InfoContainer({ product, showFullDesc, setShowFullDesc, descHeight, descriptionRef }) {
  return (
    <div className="info-container">
    <div className="container">
      <div className="name">{product.name}</div>
      <div className="price">${product.price}</div>
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
  )
}

export default InfoContainer
