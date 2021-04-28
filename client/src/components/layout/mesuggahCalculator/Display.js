import React from "react"

const Display = (props) => {
  return (
    <div className="display">
      <div className="data-container mesuggah-calc">
        <div className="data-item mesuggah-calc">
          TS-&nbsp;<span className="digit">{props.data.timeSignature}</span>
        </div>
        <div className="data-item mesuggah-calc">
          &nbsp;&nbsp;P-&nbsp;&nbsp;
          <span className="digit">{props.data.phrase}</span>
        </div>
        <div className="data-item mesuggah-calc">
          S-
          <img
            src={props.subdivision.image}
            alt={props.subdivision.unitName}
            className={`subdivision-display ${props.subdivision.unitName}`}
          />
        </div>
        <div className="data-item mesuggah-calc">
          &nbsp;&nbsp;BC-&nbsp;
          <span className="digit">{props.data.barCount}</span>
        </div>
      </div>
      <div className="mesuggah-result">
        Full Reps: &nbsp;&nbsp;<span className="digit-mesuggah">{props.fullReps}</span>
      </div>
      <div className="mesuggah-result">
        Remainder: &nbsp;<span className="digit-mesuggah">{props.remainder}</span>
      </div>
    </div>
  )
}

export default Display
