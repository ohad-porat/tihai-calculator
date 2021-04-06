import React from "react"

const RhythmicUnitButton = (props) => {
  const handleClickButton = () => {
    props.handleSelectedData("subdivision")
    props.handleSelectedSubdivision(props.unitName, props.image)
    props.addSubdivision(props.value)
  }

  return (
    <div
      className={`rhythmic-unit ${props.unitName}`}
      onClick={handleClickButton}
    >
      <img src={props.image} alt={props.unitName} />
    </div>
  )
}

export default RhythmicUnitButton
