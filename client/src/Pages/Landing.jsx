import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import Men from '../img/Men.png'
import Women from '../img/Women.png'


function Landing() {
  const history = useHistory();
  const { setNav } = useContext(NavContext);

  return (
    <div className="landing-wrapper page">
      <div className="title-container">
        <h1 className="title">bopshop.</h1>
      </div>
      <div className="downloads-container">
        <a href="https://edef4.pcloud.com/cBZ8ot9aVZ6iBktJZZZ4Gsiv7Z2ZZscRZkZY7JeHZVXZbXZ87ZTkZBZvZLXZ5XZEkZn7Z2kZrkZE7ZYXZcXj5Z0Ep4XEMPXe7RvTYmBOHXsubecRGV/Bopshop%20Windows%20Installer.zip">
          <button className="download-btn">
            <div className="label"><span>Windows installer</span><i className="fab fa-windows"></i></div>
            <div className="text">Download Bopshop</div>
          </button>
        </a>
        <a href="https://edef4.pcloud.com/cBZKWGMaVZwHiXtJZZZVvsiv7Z2ZZscRZkZ5zlQ5ZjkZpXZ7XZhZl7ZXXZhXZ3Z1kZOkZ8kZD7ZlkZ2kZr0j5Z4tlSIlvDelQW3YmYODTzxfNMMAn7/Bopshop.zip">
          <button className="download-btn">
            <div className="label"><span>MacOS</span><i className="fab fa-apple"></i></div>
            <div className="text">Download Bopshop</div>
          </button>
        </a>
      </div>
      <div className="image-container">
        <div className="left-side" onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 0
            }) }>
          <div className="button-container-men" style={{pointerEvents: "none"}}>
            <button className="men-button">men.</button>
          </div>
          <img className="men-image" src="./src/img/Men.png" alt="Man" />
        </div>
        <div className="right-side"  onClick={ () => setNav({
                path: '/home',
                direction: 1,
                state: 1
            }) }>
          <div className="button-container-women" style={{pointerEvents: "none"}}>
            <button className="women-button">women.</button>
          </div>
          <img className="women-image" src="./src/img/Women.png" alt="Woman"/>
        </div>
      </div>
    </div>
  )
}

export default Landing
