import React from "react"

const RhythmicUnitButton = (props) => {
  const timeSignatureArray = props.timeSignature.split("/")
  const timeSignatureDown = timeSignatureArray[1]

  const handleClickButton = () => {
    props.handleSelectedData("subdivision")
    props.handleSelectedSubdivision(props.unitName, props.image)
    props.addSubdivision(props.value)
  }

  let greyOut = "grey-out"
  let onClickButton = () => {}

  if (
    timeSignatureDown === "2" ||
    timeSignatureDown === "4" ||
    (timeSignatureDown === "8" &&
      (props.unitName === "eighth note" ||
        props.unitName === "sixteenth note" ||
        props.unitName === "sextuplets" ||
        props.unitName === "thirty-second note")) ||
    (timeSignatureDown === "16" &&
      (props.unitName === "sixteenth note" || props.unitName === "thirty-second note")) ||
    (timeSignatureDown === "32" && props.unitName === "thirty-second note")
  ) {
    greyOut = ""
    onClickButton = handleClickButton
  }

  return (
    <div className={`rhythmic-unit ${props.unitName} ${greyOut}`} onClick={onClickButton}>
      <img src={props.image} alt={props.unitName} />
    </div>
  )
}

export default RhythmicUnitButton
