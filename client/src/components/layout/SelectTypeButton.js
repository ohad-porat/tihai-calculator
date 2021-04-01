import React from "react"

const SelectTypeButton = (props) => {
  const handleClickButton = () => {
    if (props.selectedData !== props.value) {
      props.handleSelectedData(props.value)
    } else {
      props.handleSelectedData("")
    }
  }

  let classString = "button select-button"
  if (props.selectedData === props.value) {
    classString = "button select-button highlight-button"
  } else {
    classString = "button select-button"
  }

  return <div className={classString} onClick={handleClickButton}>{props.children}</div>
}

export default SelectTypeButton
