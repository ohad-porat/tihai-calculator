import React from "react"
import { Link } from "react-router-dom"

const TopBar = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Tihai GPS Calculator</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=0kJ4PA2yOSU" target="_blank">What Is Tihai?</a>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
