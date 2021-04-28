import React from "react"
import _ from "lodash"

import meshuggahInstructionsText from "../../../constants/meshuggahInstructionsText.js"

import ErrorList from "../ErrorList"

const Instructions = (props) => {
  let header
  let body
  if (props.selectedData === undefined || props.selectedData === "") {
    header = "The Meshuggah Calculator"
    body = (
      <>
        <div className="welcome-message first-paragraph">Paragraph 1</div>
        <div className="welcome-message second-paragraph">Paragraph 2</div>
        <div className="welcome-message third-paragraph">Paragraph 3</div>
      </>
    )
  } else if (props.selectedData === "errors") {
    header = ""
    body = (
      <div className="error-list">
        <ErrorList errors={props.errors} />
      </div>
    )
  } else if (props.selectedData === "result") {
    let tihaiStartMessage
    if (props.overallStartingBeat === 1) {
      tihaiStartMessage = `The tihai starts on beat ${props.startingBeat}.`
    } else if (props.startingSubBeat === 0) {
      tihaiStartMessage = `The tihai starts on beat ${
        props.startingBeat
      }. Count ${props.overallStartingBeat - 1} and then start.`
    } else {
      tihaiStartMessage = `The tihai starts ${props.startingSubBeat} ${
        props.startingSubBeat === 1 ? "sub-beat" : "sub-beats"
      } after beat ${props.startingBeat}. Count ${
        props.overallStartingBeat - 1
      } and then start.`
    }

    header = ""
    body = <div className="result-text">{tihaiStartMessage}</div>
  } else {
    let textByData = meshuggahInstructionsText.find(
      (element) => element.value === props.selectedData
    )
    header = textByData.header
    body = textByData.body
  }

  return (
    <div className="instructions-container">
      <h1 className="instructions-header">{header}</h1>
      <div className="instructions-body">{body}</div>
    </div>
  )
}

export default Instructions
