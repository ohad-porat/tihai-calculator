import React, { useState } from "react"

import quarter from "../../assets/images/rhythmicUnits/Quarter.png"
import eighth from "../../assets/images/rhythmicUnits/Eighth.png"
import tuplet from "../../assets/images/rhythmicUnits/Tuplet.png"
import sixteenth from "../../assets/images/rhythmicUnits/16th.png"
import quintuplets from "../../assets/images/rhythmicUnits/Quintuplet.png"
import sextuplets from "../../assets/images/rhythmicUnits/6tuplets.png"
import septuplets from "../../assets/images/rhythmicUnits/Septuplets.png"
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
          <Display data={data}></Display>
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
            value="1"
            image={quarter}
            unitName="quarter note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="2"
            image={eighth}
            unitName="eighth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="3"
            image={tuplet}
            unitName="tuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="4"
            image={sixteenth}
            unitName="sixteenth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="5"
            image={quintuplets}
            unitName="quintuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="6"
            image={sextuplets}
            unitName="sextuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="7"
            image={septuplets}
            unitName="septuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
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
