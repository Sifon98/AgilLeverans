import React from 'react'
import SideMenu from '../components/SideMenu'

const PageNotFound = () => {
    return (
        <div className="not-found-wrapper page">
            <SideMenu backArrow="/home" home={true} />
            <div className="info">
                <h1>404</h1>
                <h3>Error, this page could not be found!</h3>
            </div>
        </div>
    )
}

export default PageNotFound