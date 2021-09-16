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

    var i = 0

    const plus = () => {
        i++
    } 

    return (
    <>
        {
            categoryCheck ? products.map(Product => (
                Product.gender == gender ? 
                Product.category == category ?
                colorCheck ?
                    Product.colors.some(Color => Color.name == color) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null :
                sizeCheck ? 
                    Product.sizes.some(Size => Size === size) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null :
                [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null : null
            ))
            : products.map(Product => (
                Product.gender == gender ? 
                colorCheck ? 
                    Product.colors.some(Color => Color.name == color) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null :
                sizeCheck ? 
                    Product.sizes.includes(size) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null : 
                    [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null
            ))
        }
        {i == 0 && <p className="no-results">No results matching your search</p>}
    </>
    )
}

export default ListProducts
