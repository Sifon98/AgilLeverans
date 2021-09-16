import React from 'react'
import ColorOptions from './ColorOptions'
import SizeOptions from './SizeOptions'

function OptionsContainer({ product, selectedColor, selectedSize, setSelectedColor, setSelectedSize }) {
  return (
    <>
      <ColorOptions product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <SizeOptions product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
    </>
  )
}

export default OptionsContainer
 