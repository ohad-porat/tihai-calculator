import React from "react"

const GoButton = (props) => {
  return (
    <div className="go-button-container" onClick={props.getTihaiStartingBeatAndBar}>
      <div className="go-button">GO</div>
    </div>
  )
}

export default GoButton
