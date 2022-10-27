import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import arrowUpRight from "../../assets/arrowUpRight.svg";

export default function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();
  const handleRouting = (route) => {
    navigate(route);
  };
  return (
    <div className="nav-squares">
        <div className="column">
          <div
            className={`explore ${
              location.pathname.substring(1) === "explore" ? "active-box" : ""
            }`}
            onClick={() => handleRouting("/explore")}
          >
            <span className="arrowUpRight">
              <img src={arrowUpRight} alt="arrowUpRight" />
            </span>
            <div className="box-content">
              <h1>Explore</h1>
              <p>Explore the best places deal</p>
            </div>
          </div>
          <div
            className={`about ${
              location.pathname.substring(1) === "about" ? "active-box" : ""
            }`}
            onClick={() => handleRouting("/about")}
          >
            <span className="arrowUpRight">
              <img src={arrowUpRight} alt="arrowUpRight" />
            </span>
            <div className="box-content">
              <h1>About</h1>
              <p>Our company history</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className={`stories ${
              location.pathname.substring(1) === "stories" ? "active-box" : ""
            }`}
            onClick={() => handleRouting("/stories")}
          >
            <span className="arrowUpRight">
              <img src={arrowUpRight} alt="arrowUpRight" />
            </span>
            <div className="box-content">
              <h1>Stories</h1>
              <p>Our customer and company stories</p>
            </div>
          </div>
          <div
            className={`help ${
              location.pathname.substring(1) === "help" ? "active-box" : ""
            }`}
            onClick={() => handleRouting("/help")}
          >
            <span className="arrowUpRight">
              <img src={arrowUpRight} alt="arrowUpRight" />
            </span>
            <div className="box-content">
              <h1>Help</h1>
              <p>FAQ and Support</p>
            </div>
          </div>
        </div>
      </div>
  )
}
