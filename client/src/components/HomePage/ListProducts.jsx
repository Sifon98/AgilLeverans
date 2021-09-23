import React, { useState, useEffect } from 'react'
import ProductHTML from './Product'

function ListProducts({categoryCheck, products, gender, category, color, colorCheck, size, sizeCheck}) {
    const [double, setDouble] = useState([]);
    const [hasLoaded, setHasLoaded] = useState([])

    const checkDouble = () => {
        if (colorCheck == true && sizeCheck == true) {
            setDouble(true)
        } else {
            setDouble(false)
        }
    }

    useEffect(() => checkDouble(), [sizeCheck, colorCheck]);

    var i = 0
    var test = false

    const plus = () => {
        i++
    } 

    const zero = () => {
        test = true
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
                [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null : [null, zero()]
            ))
            : products.map(Product => (
                Product.gender == gender ? 
                colorCheck ? 
                    Product.colors.some(Color => Color.name == color) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null :
                sizeCheck ? 
                    Product.sizes.includes(size) ? [<ProductHTML key={Product._id} Product={Product}/>, plus()] : null : 
                    [<ProductHTML key={Product._id} Product={Product}/>, plus()] : [null, zero()]
            ))
        }
        {test && i == 0 && <p className="no-results">No results matching your search</p>}
    </>
    )
}

export default ListProducts
