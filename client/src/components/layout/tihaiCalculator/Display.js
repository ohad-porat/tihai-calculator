import React from "react"

const Display = (props) => {
  return (
    <div className="display">
      <div className="data-container">
        <div className="data-item">
          P-&nbsp;<span className="digit">{props.data.phrase}</span>
        </div>
        <div className="data-item">
          TC-&nbsp;<span className="digit">{props.data.timeCycle}</span>
        </div>
        <div className="data-item">
          G-&nbsp;<span className="digit">{props.data.gap}</span>
        </div>
        <div className="data-item">
          S-
          <img
            src={props.subdivision.image}
            alt={props.subdivision.unitName}
            className={`subdivision-display ${props.subdivision.unitName}`}
          />
        </div>
      </div>
      <div className="starting-beat">
        <span className="digit">{props.overallStartingBeat}</span>
      </div>
    </div>
  )
}

export default Display
