import React, { useState, useEffect } from 'react'
import ProductHTML from './Product'

function ListProducts({categoryCheck, products, gender, category, color, colorCheck, size, sizeCheck}) {
    const [double, setDouble] = useState([]);

    const checkDouble = () => {
        if (colorCheck == true && sizeCheck == true) {
            console.log("double")
            setDouble(true)
        } else {
            console.log("wth")
            setDouble(false)
        }
    }

    useEffect(() => checkDouble(), [sizeCheck, colorCheck]);

    return (
    <>
        {
            categoryCheck ? products.map(Product => (
                Product.gender == gender ? 
                Product.category == category ?
                colorCheck ?
                    Product.colors.some(Color => Color.name == color) ? <ProductHTML key={Product._id} Product={Product}/> : null :
                sizeCheck ? 
                    Product.sizes.includes(size) ? <ProductHTML key={Product._id} Product={Product}/> : null :
                <ProductHTML key={Product._id} Product={Product}/> : null : null
            ))
            : products.map(Product => (
                Product.gender == gender ? 
                colorCheck ? 
                    Product.colors.some(Color => Color.name == color) ? <ProductHTML key={Product._id} Product={Product}/> : null :
                sizeCheck ? 
                    Product.sizes.includes(size) ? <ProductHTML key={Product._id} Product={Product}/> : null : 
                <ProductHTML key={Product._id} Product={Product}/> : null
            ))
        }
    </>
    )
}

export default ListProducts
