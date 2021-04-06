import React from "react"

const Display = (props) => {
  return (
    <div className="display">
      <div className="data-container">
        <div className="data-item">
          P-&nbsp;<span className="digit">{props.data.phrase}</span>
        </div>
        <div className="data-item">
          TS-&nbsp;<span className="digit">{props.data.timeSignature}</span>
        </div>
        <div className="data-item">
          G-&nbsp;<span className="digit">{props.data.gap}</span>
        </div>
        <div className={"data-item"}>
          S-
          <img src={props.subdivision.image} alt={props.subdivision.unitName} className={`subdivision-display ${props.subdivision.unitName}`} />
        </div>
      </div>
      <div className="result">
        <span className="digit">1</span>
      </div>
    </div>
  )
}

export default Display
