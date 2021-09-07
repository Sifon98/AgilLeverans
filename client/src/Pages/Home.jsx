import React, { useState, useEffect } from 'react'

function Home() {
  const [products, setProducts] = useState([]); 

  const fetchProducts = async () => {
    // const res = await fetch('/api/products');
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    console.log(data);
    setProducts(data);
  }

  useEffect(() => fetchProducts(), [])

  return (
    <div className="container">
        {
          products.map(Product => (
            <div key={Product._id} className="product">
              <img className="image" src={Product.image} />
              <p>{Product.name}</p>
              <p>{Product.price} kr</p>
            </div>
          ))
        }
    </div>
  )
}

export default Home