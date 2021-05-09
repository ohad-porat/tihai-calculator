import React from "react"
import { NavLink } from "react-router-dom"

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <NavLink to="/" activeClassName="active">
              Tihai GPS Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/what-is-tihai" activeClassName="active">
              What Is Tihai?
            </NavLink>
          </li>
          <li>
            <NavLink to="/meshuggah-calculator" activeClassName="active">
              Meshuggah Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
