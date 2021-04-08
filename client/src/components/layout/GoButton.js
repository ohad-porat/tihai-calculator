import React from "react"

const GoButton = (props) => {
  const phrase = parseInt(props.data.phrase)
  const gap = props.data.gap === "" ? 0 : parseInt(props.data.gap)
  const timeSignature = props.data.timeSignature.split("/")
  const timeSignatureUp = parseInt(timeSignature[0])
  const timeSignatureDown = parseInt(timeSignature[1])
  const subdivisionValue = parseInt(props.data.subdivision)

  let startAtBeat

  const getTihaiStartingBeat = () => {
    const length = phrase * 3 + gap * 2
    const unitInBeat = subdivisionValue / timeSignatureDown
    const beatsInBar = timeSignatureUp * unitInBeat
    const remainder = length % beatsInBar
    let tihaiStartingBeat = beatsInBar - remainder + 1
    if (remainder === 0) {
      tihaiStartingBeat = 1
    }
    // debugger

    props.handleStartingBeat(tihaiStartingBeat)
  }

  return (
    <div className="go-button-container" onClick={getTihaiStartingBeat}>
      <div className="go-button">GO</div>
    </div>
  )
}

export default GoButton

// unitInBeat = subdivisionValue / timeSignatureDown
// beatsInBar = timeSignatureUp * unitInBeat

// const getTihaiStartingBeat = () => {
//   const length = phrase * 3 + gap * 2
//   const adapter = subdivision / timeSignatureDown
//   const beatsInBar = timeSignatureUp * subdivision
//   const remainder = length % beatsInBar
//   startAtBeat = (beatsInBar - remainder + 1) % beatsInBar
//   if (startAtBeat === 0) {
//     startAtBeat = beatsInBar
//   }

//   props.handleStartingBeat(startAtBeat / adapter / subdivision)
// }
