import React from "react"

const Display = (props) => {
  return (
    <div className="display">
      P-&nbsp;<span className="digit">{props.data.phrase}</span>
    </div>
  )
}

export default Display
