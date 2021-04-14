import React from "react"
import _ from "lodash"

import instructionsText from "../../constants/instructionsText.js"

import ErrorList from "./ErrorList.js"

const Instructions = (props) => {
  let header
  let body
  if (props.selectedData === undefined || props.selectedData === "") {
    header = "Welcome!"
    body = (
      <>
        <div className="welcome-message first-paragraph">
          "The Tihai is the coolest S*** invented since the Macarena". I think
          it was Isaac Newton who said that.
        </div>
        <div className="welcome-message second-paragraph">
          Welcome to the Tihai calculator! The only place geekier than your high
          school chemistry club meeting.
        </div>
        <div className="welcome-message third-paragraph">
          If you're tired of calculating Tihai starting points, this is for you.
          Just dial in all the info needed, and let us do the work for you!
        </div>
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
    let bar = "bar"
    if (props.tihaiStartingBar !== 1) {
      bar = "bars"
    }

    let beat = props.tihaiStartingBeat
    if (beat === 1) {
      beat += "st"
    } else if (beat === 2) {
      beat += "nd"
    } else if (beat === 3) {
      beat += "rd"
    } else {
      beat += "th"
    }

    header = ""
    body = (
      <div className="result-text">
        The Tihai should start {props.tihaiStartingBar} {bar} before the end on
        the {beat} beat
      </div>
    )
  } else {
    let textByData = instructionsText.find(
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
