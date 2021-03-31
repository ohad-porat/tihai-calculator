import React from "react"

const Display = (props) => {
  return (
      <div className="display">
        <div className="data-container">
          <div className="data-item">
            P-&nbsp;<span className="digit">{props.data.phrase}2</span>
          </div>
          <div className="data-item">
            TS-&nbsp;<span className="digit">{props.data.timeSignature}3</span>
          </div>
          <div className="data-item">
            G-&nbsp;<span className="digit">{props.data.gap}4/4</span>
          </div>
          <div className="data-item">
            S-&nbsp;&nbsp;
            <span className="digit">{props.data.subdivision}PIC</span>
          </div>
        </div>
        {/* <div className="display-line"></div> */}
        <div className="result">
          <span className="digit">1</span>
        </div>
      </div>
  )
}

export default Display
