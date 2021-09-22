import React from 'react'

function SortingButtons({ toggleDropdown, toggleDropdownFilter, dropdown, chooseCategory, category, dropdownFilter, chooseFilter, products, removeFilter, size, color, chooseColor, chooseSize }) {
    return (
        <div>
            <div className="sorting-buttons">
                <div className="dropdown-container">
                <button type="button" className="button" onClick={toggleDropdown}>KATEGORI <i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="line" />
                <div className="dropdown-container-filter">
                <button type="button" className="button-filter" onClick={toggleDropdownFilter}>FILTER <i className="fas fa-sliders-h"></i></button>
                </div>
            </div>
            {dropdown && <div className="dropdown">
                <ul>
                <li id={99} onClick={chooseCategory} className="bold">all items.</li>
                <li id={0} onClick={chooseCategory}>Shirts</li>
                <li id={1} onClick={chooseCategory}>Pants</li>
                <li id={2} onClick={chooseCategory}>Shoes</li>
                </ul>
            </div>}
            {dropdown && 
                <div className="selected-container">
                <div className="selected-width">
                    <div className={`${category == 99 ? "selected-allitems" : category == 0 ? "selected-shirts" : category == 1 ? "selected-pants" : category == 2 ? "selected-shoes" : "unselected"}`}></div>
                </div>
                </div>}
            {dropdownFilter && <div className="dropdown-filter">
                <ul className="gender-ul">
                <li id={0} onClick={chooseFilter} className="bold">men.</li>
                <li id={1} onClick={chooseFilter} className="bold">women.</li>
                </ul>
                <div className="divider" />
                <ul className="filter-ul">
                {products[0] && products[0].colors.map(Color => (
                    <li id={Color.name} onClick={chooseColor} key={Color.name} style={{background: Color.hex}} className="choose-color">
                    <div className="selected-color" style={color === Color.name ? null : {display: "none"}}>
                        <i className="fas fa-check"></i>
                    </div>
                    </li>
                ))}
                {products[0] && products[0].sizes.map(Sizes => (
                    <li id={Sizes} key={Sizes} onClick={chooseSize} className={`choose-size ${Sizes === size ? "selected-size" : ""}`}>{Sizes}</li>
                    // <li key={size} className={`size-btn ${selectedSize === size ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>{size}</li>
                ))}
                </ul>
                <div className="divider" />
                <ul className="remove-ul">
                <li onClick={removeFilter} className="bold">clear filters.</li>
                </ul>
            </div>}
        </div>
    )
}

export default SortingButtons
