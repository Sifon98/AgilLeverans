import React from 'react'

function DownloadsContainer({ size, position }) {
  return (
    <div className="downloads-container" style={position === "relative" ? {position: "relative", left:"unset",transform:"unset",top:"40px"} : null} >
      <a href="https://edef4.pcloud.com/cBZ8ot9aVZ6iBktJZZZ4Gsiv7Z2ZZscRZkZY7JeHZVXZbXZ87ZTkZBZvZLXZ5XZEkZn7Z2kZrkZE7ZYXZcXj5Z0Ep4XEMPXe7RvTYmBOHXsubecRGV/Bopshop%20Windows%20Installer.zip">
        <button className="download-btn" style={size === "small" ? {margin: "2px 0"} : null}>
          <div className="label"><span>Windows installer</span><i style={size === "small" ? {fontSize: "16px"} : null} className="fab fa-windows"></i></div>
          <div className="text" style={size === "small" ? {fontSize: "14px"} : null}>Download Bopshop</div>
        </button>
      </a>
      <a href="https://edef4.pcloud.com/cBZKWGMaVZwHiXtJZZZVvsiv7Z2ZZscRZkZ5zlQ5ZjkZpXZ7XZhZl7ZXXZhXZ3Z1kZOkZ8kZD7ZlkZ2kZr0j5Z4tlSIlvDelQW3YmYODTzxfNMMAn7/Bopshop.zip">
        <button className="download-btn" style={size === "small" ? {margin: "2px 0"} : null}>
          <div className="label"><span>MacOS</span><i style={size === "small" ? {fontSize: "16px"} : null} className="fab fa-apple"></i></div>
          <div className="text" style={size === "small" ? {fontSize: "14px"} : null}>Download Bopshop</div>
        </button>
      </a>
  </div>
  )
}

export default DownloadsContainer
