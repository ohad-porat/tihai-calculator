import React from "react"

const RhythmicUnitButton = (props) => {
  const handleClickButton = () => {
    props.handleSelectedData("subdivision")
    props.handleSelectedSubdivision(props.unitName)
    props.addSubdivision(props.value)
  }

  return (
    <div className={`rhythmic-unit tihai ${props.value}`} onClick={handleClickButton}>
      Beat /{props.value}
    </div>
  )
}

export default RhythmicUnitButton
