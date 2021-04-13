import React from "react"
import _ from "lodash"

const ErrorList = props => {
  const errorFields = Object.keys(props.errors)
  if (errorFields.length > 0) {
    let index = 0
    const listItems = errorFields.map((field) => {
      index++
      return (
        <li key={index}>
          {_.capitalize(field)} {props.errors[field]}
        </li>
      )
    })
    return (
      <ul>{listItems}</ul>
    )
  } else {
    return ""
  }
}

export default ErrorList