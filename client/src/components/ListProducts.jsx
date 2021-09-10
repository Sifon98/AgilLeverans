import React, { useState } from 'react'
import ProductHTML from './Product'

function ListProducts({categoryCheck, products, gender, category, color}) {
    // const [matchColor, setMatchColor] = useState([]);
    
    // const test = (Products) => {
    //     console.log(Products.colors)

    //     var test = Products.colors

    //     for (var i = 0; i < 11; i++) {
    //         if (test = color) {
    //             setMatchColor(true)
    //         } else {
    //             setMatchColor(false)
    //         }
    //     }
    // }

    return (
    <>
        {
            categoryCheck ? products.map(Product => (
                Product.gender == gender ?
                Product.category == category ?
                color == "" ? 
                    <ProductHTML key={Product._id} Product={Product}/>
                : <ProductHTML key={Product._id} Product={Product}/> && console.log("Gotta fix this") : null : null
            ))
            : products.map(Product => (
                Product.gender == gender ?
                    <ProductHTML key={Product._id} Product={Product}/> 
                : null
            ))
        }
    </>
    )
}

export default ListProducts
