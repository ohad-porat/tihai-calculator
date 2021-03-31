import React from "react"

const ClearButton = (props) => {
  return <div className="button" onClick={props.handleClear}>{props.children}</div>
}

export default ClearButton
