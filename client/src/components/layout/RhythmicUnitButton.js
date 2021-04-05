import React from "react"

const RhythmicUnitButton = (props) => {
  const handleClickButton = () => {
    props.handleSelectedData("subdivision")
    props.handleSelectedSubdivision(props.unitName, props.image)
    props.addSubdivision(props.value)
  }

  let highlightClass = ""
  if (props.selectedSubdivision.unitName === props.unitName) {
    highlightClass = "highlight-button"
  }

  return (
    <div
      className={`rhythmic-unit ${props.unitName} ${highlightClass}`}
      onClick={handleClickButton}
    >
      <img src={props.image} alt={props.unitName} />
    </div>
  )
}

export default RhythmicUnitButton
