import React from "react"

const Button = (props) => {
  const handleClickButton = () => {
    props.addToDisplay(props.children)
  }

  return (
    <div className="button" onClick={handleClickButton}>
      {props.children}
    </div>
  )
}

export default Button
