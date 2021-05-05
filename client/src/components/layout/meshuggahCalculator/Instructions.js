import React from "react"
import _ from "lodash"

import meshuggahLogo from "../../../assets/images/meshuggahLogo.png"

import meshuggahInstructionsText from "../../../constants/meshuggahInstructionsText.js"

import ErrorList from "../ErrorList"

const Instructions = (props) => {
  let header
  let body
  if (props.selectedData === undefined || props.selectedData === "") {
    header = (
      <>
        The <img src={meshuggahLogo} alt="Meshuggah Logo" className="meshuggah-logo" /> Calculator
      </>
    )
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
    header = ""
    body = (
      <div className="result-text">
        This section contains {props.fullReps} full {props.fullReps === 1 ? "rep" : "reps"} of the
        phrase and a remainder of {props.remainder} beats.
      </div>
    )
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