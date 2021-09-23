import React, { useState, useContext, useEffect } from 'react'
import { NavContext } from "../context/NavContext";
import { UserContext } from "../context/UserContext";
import { v4 as uuidv4 } from 'uuid';



function Shoppingcart() {
    const { setNav } = useContext(NavContext);
    const { user, setUser } = useContext(UserContext);

    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchShoppingCart();
    }, [])

    const fetchShoppingCart = async () => {
        const res = await fetch("/api/saved-products?type=cart");
        const data = await res.json();
        let products = data.products.filter(x => x.item !== null);

        // Set total price & find imageIndex for each product 
        // (each product has an unique color, and an image corresponding to each color)
        let total = 0;
        products = products.map(x => {
            const countPrice = x.item.price * x.count;
            total += countPrice;
            return {...x, countPrice: parseFloat(countPrice.toFixed(2)), imageIndex: x.item.colors.findIndex(c => c.name === x.color.name)}
        })

        setProducts(products);
        setTotalPrice(total.toFixed(2));
    }

    const removeItem = async (id) => {

        const res = await fetch(`/api/saved-products/${id}?type=cart`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        await res;

        // Update products
        const UpdateProducts = [...products].filter(x => x._id !== id);

        // Update total price
        let total = 0;
        UpdateProducts.forEach((x) => {
            total += x.item.price * x.count
        })

        // Set State
        setProducts(UpdateProducts);
        setTotalPrice(total.toFixed(2));
        setUser({
            ...user,
            cart: UpdateProducts
        })
    }



    const handleIncrementDecrement = async (id, count, currentPrice, increment) => {
        if(!increment && count === 1) return removeItem(id);

        increment ? count++ : count--;
        const UpdateProducts = [...products].map(x => {
            if(x._id === id) {
                return {...x, countPrice: parseFloat((x.item.price * count).toFixed(2)), count}
            } 
            return {...x}
        })
        setProducts(UpdateProducts);
        const total = increment ? parseFloat(totalPrice) + currentPrice : parseFloat(totalPrice) - currentPrice;
        console.log(total)
        setTotalPrice(total.toFixed(2));

        await fetch(`/api/saved-products/count/${id}?type=cart&count=${count}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
    }

    return (
            <div className="shoppingWrapper page">
                <header className ="navContainer">
                <i id="backArrow" className="fas fa-arrow-left" aria-hidden="true" onClick={ () => setNav({path: "/home", direction: 0}) }></i>
                <h1 className ="profileTitle">bopshop.</h1>
                <i className="fas fa-user-circle" id ="userCircle" style={{visibility: "hidden"}} onClick={ () => setNav({path: "/profile", direction: 0}) }></i>
                </header>

                <div className="cartContainer">
                <h1 className="cartTitle">your cart.</h1>
                </div>

                <div className="itemContainer">
                    {
                        products && products.map(x => (
                        <div className="item" key={x._id}>
                            <img className="itemPic" src={x.item.images[x.imageIndex]}></img>
                            <div className="product-info-wrapper">
                                <p className="cartText">{x.item.name}</p>
                                <p className="cartRef">ref: {x._id.substring(0, 8)}</p>
                                <div className="circle-box-wrapper">
                                    <div className="color-box" style={{background: x.color.hex}}></div>
                                    <div className="size-box">{x.size}</div>
                                </div>
                            </div>
                            <div className="add-remove-box">
                                <div className="increment-btn" onClick={() => handleIncrementDecrement(x._id, x.count, x.item.price, 1)}><i className="fas fa-plus"></i></div>     
                                <div className="item-count">{x.count}</div>
                                <div className="decrement-btn" onClick={() => handleIncrementDecrement(x._id, x.count, x.item.price, 0)}><i className="fas fa-minus"></i></div>                
                            </div>
                            <p className="priceTag">${x.countPrice}</p>
                            <div className="remove-item-btn" onClick={() => removeItem(x._id)}>
                                <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                                </svg>
                            </div>

                        </div>
                        ))
                    }
                </div>
                    <p id="totalText">cart subtotal.</p>
                    <div id="totalSum">${totalPrice}</div>
                    {products && products.length > 0 ? (
                        <svg onClick={() => setNav({path: "/checkout", direction: 1})} id ="blackBar" width="329" height="59" viewBox="0 0 329 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="329" height="59" rx="29.5" fill="black"/>
                        <path d="M87.7559 27.4375C87.432 24.75 85.398 23.2045 82.7048 23.2045C79.6309 23.2045 77.2843 25.375 77.2843 29.1818C77.2843 32.9773 79.5911 35.1591 82.7048 35.1591C85.6877 35.1591 87.4889 33.1761 87.7559 31.0341L85.2673 31.0227C85.0343 32.267 84.057 32.983 82.7445 32.983C80.9775 32.983 79.7786 31.6705 79.7786 29.1818C79.7786 26.7614 80.9605 25.3807 82.7616 25.3807C84.1082 25.3807 85.0798 26.1591 85.2673 27.4375H87.7559ZM92.7778 35.1705C95.4256 35.1705 97.0733 33.358 97.0733 30.6705C97.0733 27.9659 95.4256 26.1591 92.7778 26.1591C90.1301 26.1591 88.4824 27.9659 88.4824 30.6705C88.4824 33.358 90.1301 35.1705 92.7778 35.1705ZM92.7892 33.2955C91.5676 33.2955 90.9426 32.1761 90.9426 30.6534C90.9426 29.1307 91.5676 28.0057 92.7892 28.0057C93.9881 28.0057 94.6131 29.1307 94.6131 30.6534C94.6131 32.1761 93.9881 33.2955 92.7892 33.2955ZM100.428 29.9545C100.433 28.8295 101.104 28.1705 102.081 28.1705C103.053 28.1705 103.638 28.8068 103.632 29.875V35H106.053V29.4432C106.053 27.4091 104.859 26.1591 103.041 26.1591C101.746 26.1591 100.808 26.7955 100.416 27.8125H100.314V26.2727H98.0072V35H100.428V29.9545ZM111.962 26.2727H110.32V24.1818H107.9V26.2727H106.707V28.0909H107.9V32.6364C107.888 34.3466 109.053 35.1932 110.809 35.1193C111.434 35.0966 111.877 34.9716 112.121 34.892L111.741 33.0909C111.621 33.1136 111.366 33.1705 111.138 33.1705C110.656 33.1705 110.32 32.9886 110.32 32.3182V28.0909H111.962V26.2727ZM112.899 35H115.319V26.2727H112.899V35ZM114.115 25.1477C114.837 25.1477 115.427 24.5966 115.427 23.9205C115.427 23.25 114.837 22.6989 114.115 22.6989C113.399 22.6989 112.808 23.25 112.808 23.9205C112.808 24.5966 113.399 25.1477 114.115 25.1477ZM119.039 29.9545C119.045 28.8295 119.715 28.1705 120.692 28.1705C121.664 28.1705 122.249 28.8068 122.243 29.875V35H124.664V29.4432C124.664 27.4091 123.471 26.1591 121.653 26.1591C120.357 26.1591 119.42 26.7955 119.028 27.8125H118.925V26.2727H116.618V35H119.039V29.9545ZM131.528 31.2841C131.534 32.4545 130.733 33.0682 129.863 33.0682C128.949 33.0682 128.358 32.4261 128.352 31.3977V26.2727H125.932V31.8295C125.937 33.8693 127.13 35.1136 128.886 35.1136C130.199 35.1136 131.142 34.4375 131.534 33.4148H131.625V35H133.949V26.2727H131.528V31.2841ZM139.222 35.1705C141.381 35.1705 142.836 34.1193 143.176 32.5L140.938 32.3523C140.694 33.017 140.069 33.3636 139.262 33.3636C138.051 33.3636 137.284 32.5625 137.284 31.2614V31.2557H143.228V30.5909C143.228 27.625 141.432 26.1591 139.125 26.1591C136.557 26.1591 134.892 27.983 134.892 30.6761C134.892 33.4432 136.534 35.1705 139.222 35.1705ZM137.284 29.7557C137.336 28.7614 138.091 27.9659 139.165 27.9659C140.216 27.9659 140.944 28.7159 140.949 29.7557H137.284ZM151.872 26.2727H150.23V24.1818H147.81V26.2727H146.617V28.0909H147.81V32.6364C147.798 34.3466 148.963 35.1932 150.719 35.1193C151.344 35.0966 151.787 34.9716 152.031 34.892L151.651 33.0909C151.531 33.1136 151.276 33.1705 151.048 33.1705C150.566 33.1705 150.23 32.9886 150.23 32.3182V28.0909H151.872V26.2727ZM156.658 35.1705C159.306 35.1705 160.954 33.358 160.954 30.6705C160.954 27.9659 159.306 26.1591 156.658 26.1591C154.011 26.1591 152.363 27.9659 152.363 30.6705C152.363 33.358 154.011 35.1705 156.658 35.1705ZM156.67 33.2955C155.448 33.2955 154.823 32.1761 154.823 30.6534C154.823 29.1307 155.448 28.0057 156.67 28.0057C157.869 28.0057 158.494 29.1307 158.494 30.6534C158.494 32.1761 157.869 33.2955 156.67 33.2955ZM168.894 35.1705C171.218 35.1705 172.678 33.8068 172.792 31.8011H170.508C170.366 32.733 169.752 33.2557 168.923 33.2557C167.792 33.2557 167.059 32.3068 167.059 30.6364C167.059 28.9886 167.798 28.0455 168.923 28.0455C169.809 28.0455 170.377 28.6307 170.508 29.5H172.792C172.69 27.483 171.161 26.1591 168.883 26.1591C166.235 26.1591 164.599 27.9943 164.599 30.6705C164.599 33.3239 166.207 35.1705 168.894 35.1705ZM176.122 29.9545C176.128 28.8295 176.815 28.1705 177.804 28.1705C178.787 28.1705 179.366 28.8011 179.361 29.875V35H181.781V29.4432C181.787 27.3977 180.582 26.1591 178.764 26.1591C177.44 26.1591 176.554 26.7841 176.156 27.8125H176.054V23.3636H173.702V35H176.122V29.9545ZM187.023 35.1705C189.182 35.1705 190.637 34.1193 190.978 32.5L188.739 32.3523C188.495 33.017 187.87 33.3636 187.063 33.3636C185.853 33.3636 185.086 32.5625 185.086 31.2614V31.2557H191.029V30.5909C191.029 27.625 189.233 26.1591 186.927 26.1591C184.358 26.1591 182.694 27.983 182.694 30.6761C182.694 33.4432 184.336 35.1705 187.023 35.1705ZM185.086 29.7557C185.137 28.7614 185.893 27.9659 186.966 27.9659C188.018 27.9659 188.745 28.7159 188.75 29.7557H185.086ZM195.912 35.1705C198.235 35.1705 199.696 33.8068 199.809 31.8011H197.525C197.383 32.733 196.77 33.2557 195.94 33.2557C194.809 33.2557 194.076 32.3068 194.076 30.6364C194.076 28.9886 194.815 28.0455 195.94 28.0455C196.826 28.0455 197.395 28.6307 197.525 29.5H199.809C199.707 27.483 198.179 26.1591 195.9 26.1591C193.253 26.1591 191.616 27.9943 191.616 30.6705C191.616 33.3239 193.224 35.1705 195.912 35.1705ZM200.719 35H203.139V32.2273L203.793 31.483L206.174 35H209.009L205.605 30.0511L208.844 26.2727H206.066L203.27 29.5852H203.139V23.3636H200.719V35ZM212.975 35.1705C215.623 35.1705 217.271 33.358 217.271 30.6705C217.271 27.9659 215.623 26.1591 212.975 26.1591C210.328 26.1591 208.68 27.9659 208.68 30.6705C208.68 33.358 210.328 35.1705 212.975 35.1705ZM212.987 33.2955C211.765 33.2955 211.14 32.1761 211.14 30.6534C211.14 29.1307 211.765 28.0057 212.987 28.0057C214.186 28.0057 214.811 29.1307 214.811 30.6534C214.811 32.1761 214.186 33.2955 212.987 33.2955ZM223.801 31.2841C223.807 32.4545 223.006 33.0682 222.136 33.0682C221.222 33.0682 220.631 32.4261 220.625 31.3977V26.2727H218.205V31.8295C218.21 33.8693 219.404 35.1136 221.159 35.1136C222.472 35.1136 223.415 34.4375 223.807 33.4148H223.898V35H226.222V26.2727H223.801V31.2841ZM232.16 26.2727H230.518V24.1818H228.097V26.2727H226.904V28.0909H228.097V32.6364C228.086 34.3466 229.251 35.1932 231.006 35.1193C231.631 35.0966 232.075 34.9716 232.319 34.892L231.938 33.0909C231.819 33.1136 231.563 33.1705 231.336 33.1705C230.853 33.1705 230.518 32.9886 230.518 32.3182V28.0909H232.16V26.2727ZM246.223 35.6364L251.95 29.9091L246.223 24.1818L244.905 25.4943L248.365 28.9489H240.257V30.8693H248.365L244.905 34.3295L246.223 35.6364Z" fill="white"/>
                        </svg>
                    ):null}

                    <div style={{height: "140px"}}></div>
                </div>
        
    )
}


export default Shoppingcart