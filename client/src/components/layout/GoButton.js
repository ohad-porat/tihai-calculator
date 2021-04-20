import React from "react"

const GoButton = (props) => {
  const phrase = parseInt(props.data.phrase)
  const gap = props.data.gap === "" ? 0 : parseInt(props.data.gap)
  const timeCycle = parseInt(props.data.timeCycle)
  const subdivision = parseInt(props.data.subdivision)

  const getTihaiStartingBeatAndBar = () => {
    if (props.validateSubmission()) {
      const length = phrase * 3 + gap * 2
      const cycle = timeCycle * subdivision

        const remainder = length % cycle 
        const tihaiStartingBeat = cycle - remainder + 1 

      props.handleSelectedData("result")
      props.handleStartingBeat(tihaiStartingBeat)
      
      const tihaiStartingBar = 0
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
