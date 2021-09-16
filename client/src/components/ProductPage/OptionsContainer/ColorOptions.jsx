import React from 'react'

function ColorOptions({ product, selectedColor, setSelectedColor }) {
  return (
    <div className="options-container">
      <label>Color</label>
      <ul className="color-list">
        {product.colors && product.colors.map(color => {
          return (
            <li key={color.name} style={{background: color.hex}} onClick={() => {
              setSelectedColor(
                {
                name: color.name,
                hex: color.hex,
                index: product.colors.findIndex(c => c.name === color.name)
                }
              )
            }}>
              <div className="selected" style={selectedColor.name === color.name ? null : {display: "none"}}>
                <i className="fas fa-check"></i>
              </div>
            </li>
          )
        })} 
      </ul>
    </div>
  )
}

export default ColorOptions
