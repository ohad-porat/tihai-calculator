import React from "react"

const DeleteButton = (props) => {
  return <div className="button" onClick={props.handleDelete}>{props.children}</div>
}

export default DeleteButton
