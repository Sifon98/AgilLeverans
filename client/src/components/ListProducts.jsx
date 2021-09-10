import React from 'react'
import ProductHTML from './Product'

function ListProducts({categoryCheck, products, gender, category, color}) {
  return (
    <>
    {
        categoryCheck ? products.map(Product => (
            Product.gender == gender ?
            Product.category == category ?
            color == "" ? <ProductHTML Product={Product} />
                : Product.colors.map(colors => {
                    colors.name == color ? <ProductHTML Product={Product} /> : null
                }) : null : null
        ))
        : products.map(Product => (
            Product.gender == gender ?
            <ProductHTML Product={Product} /> : null
        ))
    }
    </>
  )
}

export default ListProducts
