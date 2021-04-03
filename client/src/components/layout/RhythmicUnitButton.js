import React from "react"

const RhythmicUnitButton = (props) => {
  const handleClickButton = () => {
    props.handleSelectedData("subdivision")
    props.addSubdivision(props.value)
  }
return <div className="rhythmic-unit" onClick={handleClickButton}>{props.children}</div>
}

export default RhythmicUnitButton