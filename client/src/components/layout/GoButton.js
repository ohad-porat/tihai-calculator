import React from "react"

const GoButton = (props) => {
  const phrase = parseInt(props.data.phrase)
  const gap = props.data.gap === "" ? 0 : parseInt(props.data.gap)
  const timeSignature = props.data.timeSignature.split("/")
  const timeSignatureUp = parseInt(timeSignature[0])
  const timeSignatureDown = parseInt(timeSignature[1])
  const subdivisionValue = parseInt(props.data.subdivision)

  const getTihaiStartingBeatAndBar = () => {
    if (props.validateSubmission()) {
      const length = phrase * 3 + gap * 2
      const unitInBeat = subdivisionValue / timeSignatureDown
      const unitsInBar = timeSignatureUp * unitInBeat
      const remainder = length % unitsInBar
      const tihaiStartingBeat = unitsInBar - remainder + 1
      const tihaiStartingBar = Math.ceil(length / unitsInBar)

      if (remainder === 0) {
        tihaiStartingBeat = 1
      }

      props.handleSelectedData("result")
      props.handleStartingBeat(tihaiStartingBeat)
      props.handleStartingBar(tihaiStartingBar)
    }
  }

  return (
    <div className="go-button-container" onClick={getTihaiStartingBeatAndBar}>
      <div className="go-button">GO</div>
    </div>
  )
}

export default GoButton
