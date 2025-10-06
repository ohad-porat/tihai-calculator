"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const TopBar = () => {
  const pathname = usePathname()

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Tihai Calculator
            </Link>
          </li>
          <li>
            <Link href="/what-is-tihai" className={pathname === "/what-is-tihai" ? "active" : ""}>
              What Is Tihai?
            </Link>
          </li>
          <li>
            <Link href="/meshuggah-calculator" className={pathname === "/meshuggah-calculator" ? "active" : ""}>
              Meshuggah Calculator
            </Link>
          </li>
          <li>
            <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
