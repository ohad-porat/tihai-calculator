import React from "react"

const Display = (props) => {
  return (
    <div className="display meshuggah">
      <div className="data-container meshuggah-calc">
        <div className="data-item meshuggah-calc">
          TS-&nbsp;<span className="digit">{props.data.timeSignature}</span>
        </div>
        <div className="data-item meshuggah-calc">
          &nbsp;&nbsp;P-&nbsp;&nbsp;
          <span className="digit">{props.data.phrase}</span>
        </div>
        <div className="data-item meshuggah-calc">
          S-
          <img
            src={props.subdivision.image}
            alt={props.subdivision.unitName}
            className={`subdivision-display ${props.subdivision.unitName}`}
          />
        </div>
        <div className="data-item meshuggah-calc">
          &nbsp;&nbsp;BC-&nbsp;
          <span className="digit">{props.data.barCount}</span>
        </div>
      </div>
      <div className="meshuggah-result">
        Full Reps: &nbsp;&nbsp;<span className="digit-meshuggah">{props.fullReps}</span>
      </div>
      <div className="meshuggah-result">
        Remainder: &nbsp;<span className="digit-meshuggah">{props.remainder}</span>
      </div>
    </div>
  )
}

export default Display
