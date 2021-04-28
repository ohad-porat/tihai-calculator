import React from "react"

const SelectTypeButton = (props) => {
  const handleClickButton = () => {
    if (props.selectedData !== props.value) {
      props.handleSelectedData(props.value)
    } else {
      props.handleSelectedData("")
    }
  }

  let highlightClass = ""
  if (props.selectedData === props.value) {
    highlightClass = "highlight-button"
  }

  return (
    <div
      className={`button select-button ${highlightClass}`}
      onClick={handleClickButton}
    >
      {props.children}
    </div>
  )
}

export default SelectTypeButton
