import React from "react"

const GoButton = (props) => {
  const phrase = parseInt(props.data.phrase)
  const gap = props.data.gap === "" ? 0 : parseInt(props.data.gap)
  const timeSignature = props.data.timeSignature.split("/")
  const timeSignatureUp = parseInt(timeSignature[0])
  const timeSignatureDown = parseInt(timeSignature[1])
  const subdivision = parseInt(props.data.subdivision)

  let result

  const getTihaiResult = () => {
    const length = phrase * 3 + gap * 2
    const adapter = subdivision / timeSignatureDown
    const beatsInBar = timeSignatureUp * subdivision
    const remainder = length % beatsInBar
    result = (beatsInBar - remainder + 1) % beatsInBar
    if (result === 0) {
      result = beatsInBar
    }

    props.handleResult(result / adapter / subdivision)
  }

  return (
    <div className="go-button-container" onClick={getTihaiResult}>
      <div className="go-button">GO</div>
    </div>
  )
}

export default GoButton
