import React, { useState } from "react"

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
          >
            Quart
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="2"
          >
            Eighth
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="3"
          >
            Tuplets
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="4"
          >
            Sixteen
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="5"
          >
            Quintuplets
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="6"
          >
            Sextuplets
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="7"
          >
            Septuplets
          </RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={addSubdivision}
            handleSelectedData={handleSelectedData}
            value="8"
          >
            ThirtyTwo
          </RhythmicUnitButton>
        </div>
      </div>
    </div>
  )
}

export default Calculator
