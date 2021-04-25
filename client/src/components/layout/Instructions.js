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
