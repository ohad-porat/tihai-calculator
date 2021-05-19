import React from "react"
import _ from "lodash"

import tihaiInstructionsText from "../../../constants/tihaiInstructionsText.js"

import ErrorList from "../ErrorList"

const Instructions = (props) => {
  let header
  let body
  if (props.selectedData === undefined || props.selectedData === "") {
    header = "Welcome!"
    body = (
      <>
        <div className="welcome-message first-paragraph">
          "The Tihai is the coolest S*** invented since the Macarena". I think it was Isaac Newton
          who said that.
        </div>
        <div className="welcome-message second-paragraph">
          Welcome to the Tihai calculator! The only place geekier than your high school chemistry
          club meeting.
        </div>
        <div className="welcome-message third-paragraph">
          If you're tired of calculating Tihai starting points, this is for you. Just dial in all
          the info needed, and let us do the work for you!
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
    let tihaiStartMessageParagraph1
    let tihaiStartMessageParagraph2
    if (props.overallStartingBeat === 1) {
      tihaiStartMessageParagraph1 = `The tihai starts on beat ${props.startingBeat}.`
    } else if (props.startingSubBeat === 0) {
      tihaiStartMessageParagraph1 = `The tihai starts on beat ${props.startingBeat}.`
      tihaiStartMessageParagraph2 = `Just count ${props.overallStartingBeat - 1} ${
        props.overallStartingBeat - 1 === 1 ? "sub-beat" : "sub-beats"
      } from beat 1 and start.`
    } else {
      tihaiStartMessageParagraph1 = `The tihai starts ${props.startingSubBeat} ${
        props.startingSubBeat === 1 ? "sub-beat" : "sub-beats"
      } after beat ${props.startingBeat}.`
      tihaiStartMessageParagraph2 = `Just count ${props.overallStartingBeat - 1} ${
        props.overallStartingBeat - 1 === 1 ? "sub-beat" : "sub-beats"
      } from beat 1 and start.`
    }

    header = ""
    body = (
      <div className="result-text">
        <div className="tihai-result-p1">{tihaiStartMessageParagraph1}</div>
        <div className="tihai-result-p2">{tihaiStartMessageParagraph2}</div>
      </div>
    )
  } else {
    let textByData = tihaiInstructionsText.find((element) => element.value === props.selectedData)
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
