import React, { useRef, useEffect } from 'react'

function SideMenu({ chooseFilter, chooseCategory, products, removeFilter, chooseColor, chooseSize, size, color }) {
    const checkboxRef = useRef(null);
    useOutsideAlerter(checkboxRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if(document.getElementById("test").checked == true){
                        document.getElementById("test").checked = false
                    }
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    return (
        <>
            <div className="menuToggle">
                <input id="test" type="checkbox"/>
                {/* Hamburger menu */}
                <span></span>
                <span></span>
                <span></span>
                {/* List when menu is opened */}
                <ul className="menu" ref={checkboxRef}>
                    <li id={0} onClick={chooseFilter} className="topText bold text">men.</li>
                    <li id={1} onClick={chooseFilter} className="bold text">women.</li>
                    <div className="divider" />
                    <li id={99} onClick={chooseCategory} className="bold text">all items.</li>
                    <li id={0} onClick={chooseCategory} className="text">Shirts</li>
                    <li id={1} onClick={chooseCategory} className="text">Pants</li>
                    <li id={2} onClick={chooseCategory} className="text">Shoes</li>
                    <div className="divider" />
                    <div className="helper">
                    {products && products[0] && products[0].colors.map(Color => (
                    <li id={Color.name} onClick={chooseColor} key={Color.name} style={{background: Color.hex}} className="choose-color">
                        <div className="selected-color" style={color === Color.name ? null : {display: "none"}}>
                        <i className="fas fa-check"></i>
                        </div>
                    </li>
                    ))}
                    {products && products[0] && products[0].sizes.map(Sizes => (
                    <li id={Sizes} key={Sizes} onClick={chooseSize} className={`choose-size ${Sizes === size ? "selected-size" : ""}`}>{Sizes}</li>
                    // <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
                    ))}
                    </div>
                    <li onClick={removeFilter} className="bold text">clear filters.</li>
                </ul>
            </div>
        </>
    )
}

export default SideMenu
