import React from "react"

const ClearButton = (props) => {
  return (
    <div className="button clear-button" onClick={props.handleClear}>
      Clear
    </div>
  )
}

export default ClearButton
