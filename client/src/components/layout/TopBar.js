import React from "react"
import { Link } from "react-router-dom"

const TopBar = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text"><Link to="/" className="home-link">Tihai GPS Calculator</Link></li>
          <li>
          <Link to="/what-is-tihai">What Is Tihai?</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
