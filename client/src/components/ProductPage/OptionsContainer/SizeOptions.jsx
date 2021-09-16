import React from 'react'

function SizeOptions({ product, selectedSize, setSelectedSize }) {
  return (
    <div className="options-container">
      <label>Size</label>
      <ul className="size-list">
        {product.sizes && product.sizes.map(size => {
          return (
            <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
          ) 
          })
        }
      </ul>
  </div>
  )
}

export default SizeOptions
