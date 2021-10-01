import React from 'react'

function DownloadsContainer({ size, position }) {
  return (
    <div className="downloads-container" style={position === "relative" ? {position: "relative", left:"unset",transform:"unset",top:"40px"} : null} >
      <a href="https://drive.google.com/u/3/uc?id=1MzJhc9-GiHxJk42ZJav5lUaI2uAmVEBL&export=download">
        <button className="download-btn" style={size === "small" ? {margin: "2px 0"} : null}>
          <div className="label"><span>Windows installer</span><i style={size === "small" ? {fontSize: "16px"} : null} className="fab fa-windows"></i></div>
          <div className="text" style={size === "small" ? {fontSize: "14px"} : null}>Download Bopshop</div>
        </button>
      </a>
      <a href="https://drive.google.com/drive/folders/1dK9di6r4lJ8gj8cOu3FfVDRk-lHs47NX?usp=sharing">
        <button className="download-btn" style={size === "small" ? {margin: "2px 0"} : null}>
          <div className="label"><span>MacOS</span><i style={size === "small" ? {fontSize: "16px"} : null} className="fab fa-apple"></i></div>
          <div className="text" style={size === "small" ? {fontSize: "14px"} : null}>Download Bopshop</div>
        </button>
      </a>
  </div>
  )
}

export default DownloadsContainer
