import React, { useState } from "react"

import quarter from "../../assets/images/rhythmicUnits/quarter.png"
import eighth from "../../assets/images/rhythmicUnits/eighth.png"
import tuplet from "../../assets/images/rhythmicUnits/tuplets.png"
import sixteenth from "../../assets/images/rhythmicUnits/16th.png"
import quintuplets from "../../assets/images/rhythmicUnits/quintuplets.png"
import sextuplets from "../../assets/images/rhythmicUnits/sextuplets.png"
import septuplets from "../../assets/images/rhythmicUnits/septuplets.png"
import thirtyTwo from "../../assets/images/rhythmicUnits/32nd.png"

import Button from "./Button.js"
import DeleteButton from "./DeleteButton.js"
import SelectTypeButton from "./SelectTypeButton.js"
import Display from "./Display.js"
import RhythmicUnitButton from "./RhythmicUnitButton.js"

const Calculator = () => {
  const [data, setData] = useState({
    phrase: "",
    timeSignature: "",
    gap: "",
    subdivision: "",
  })
  const [selectedData, setSelectedData] = useState()
  const [selectedSubdivision, setSelectedSubdivision] = useState({
    unitName: "",
    image: "",
  })

  const addToDisplay = (number) => {
    if (selectedData !== "subdivision") {
      setData({
        ...data,
        [selectedData]: data[selectedData] + number,
      })
    }
  }

  const addSubdivision = (value) => {
    setData({
      ...data,
      ["subdivision"]: value,
    })
  }

  const handleSelectedData = (dataType) => {
    setSelectedData(dataType)
  }

  const handleSelectedSubdivision = (unitName, image) => {
    setSelectedSubdivision({
      unitName: unitName,
      image: image,
    })
  }

  const handleDelete = () => {
    setData({
      ...data,
      [selectedData]: data[selectedData].slice(0, -1),
    })
  }

  return (
    <div className="calculator">
      <div className="calc-container">
        <div className="row">
          <Display data={data} subdivision={selectedSubdivision}></Display>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={handleSelectedData}
            selectedData={selectedData}
            value="phrase"
          >
            Phrase
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={handleSelectedData}
            selectedData={selectedData}
            value="timeSignature"
          >
            Time Signature
          </SelectTypeButton>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={handleSelectedData}
            selectedData={selectedData}
            value="gap"
          >
            Gap
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={handleSelectedData}
            selectedData={selectedData}
            value="subdivision"
          >
            Subdivision
          </SelectTypeButton>
        </div>
        <div className="number-buttons-container">
          <div className="row">
            <Button addToDisplay={addToDisplay}>7</Button>
            <Button addToDisplay={addToDisplay}>8</Button>
            <Button addToDisplay={addToDisplay}>9</Button>
          </div>
          <div className="row">
            <Button addToDisplay={addToDisplay}>4</Button>
            <Button addToDisplay={addToDisplay}>5</Button>
            <Button addToDisplay={addToDisplay}>6</Button>
          </div>
          <div className="row">
            <Button addToDisplay={addToDisplay}>1</Button>
            <Button addToDisplay={addToDisplay}>2</Button>
            <Button addToDisplay={addToDisplay}>3</Button>
          </div>
          <div className="row">
            <Button addToDisplay={addToDisplay}>/</Button>
            <Button addToDisplay={addToDisplay}>0</Button>
            <DeleteButton handleDelete={handleDelete}>Del</DeleteButton>
          </div>
        </div>
        <div className="rhythmic-unit-container">
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="1"
            image={quarter}
            unitName="quarter note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="2"
            image={eighth}
            unitName="eighth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="3"
            image={tuplet}
            unitName="tuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="4"
            image={sixteenth}
            unitName="sixteenth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="5"
            image={quintuplets}
            unitName="quintuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="6"
            image={sextuplets}
            unitName="sextuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="7"
            image={septuplets}
            unitName="septuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            handleSelectedSubdivision={handleSelectedSubdivision}
            value="8"
            image={thirtyTwo}
            unitName="thirty-second note"
          ></RhythmicUnitButton>
        </div>
      </div>
    </div>
  )
}

export default Calculator
