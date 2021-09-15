import React from 'react'

function inputField() {
    return (
        <>
            <label  className={inputName} htmlFor={inputName}>{inputName}</label>
            <input  onChange={(e) => setState(e.target.value)} defaultValue={inputName} className={inputName} type="text" disabled={!isDisabledName}/>
            <button onClick={()=> setIsDisabledName(boolean => !boolean)}>{buttonText(isDisabledName)}</button>
            <br /> 
        </>
    )
}

export default inputField
