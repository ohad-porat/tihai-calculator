import React from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <>
      <h1>
        <Link to="/tihai-calculator">Tihai Calculator</Link>
      </h1>
      <h1>
        <Link to="/meshuggah-calculator">Meshuggah Calculator</Link>
      </h1>
    </>
  )
}

export default LandingPage
