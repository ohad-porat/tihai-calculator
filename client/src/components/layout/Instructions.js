import React from "react"

import instructionsText from "../../constants/instructionsText.js"

const Instructions = (props) => {
  let header
  let body
  if (props.selectedData === undefined || props.selectedData === "") {
    header = "Welcome Message"
    body = "Here is some text to welcome the user"
  } else {
    let textByData = instructionsText.find(element => element.value === props.selectedData)
    header = textByData.header
    body = textByData.body
  }

  return (
    <div className="instructions-container">
      <h1 className="instructions-header">{header}</h1>
      <p className="instructions-body">{body}</p>
    </div>
  )
}

export default Instructions
