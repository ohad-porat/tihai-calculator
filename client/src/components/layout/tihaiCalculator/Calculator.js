import React from "react"

import CalculatorButton from "./CalculatorButton.js"
import SelectTypeButton from "./SelectTypeButton.js"
import Display from "./Display.js"
import RhythmicUnitButton from "./RhythmicUnitButton.js"

const Calculator = (props) => {
  return (
    <div className="calculator" onKeyDown={props.handleKeyPress} tabIndex="0">
      <div className="calc-container">
        <div className="row">
          <Display
            data={props.data}
            subdivision={props.selectedSubdivision}
            overallStartingBeat={props.overallStartingBeat}
          ></Display>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="phrase"
          >
            Phrase
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="timeCycle"
          >
            Time Cycle
          </SelectTypeButton>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="gap"
          >
            Gap
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="subdivision"
          >
            Subdivision
          </SelectTypeButton>
        </div>
        <div className="number-buttons-container">
          <div className="row">
            <CalculatorButton addToDisplay={props.addToDisplay}>7</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>8</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>9</CalculatorButton>
          </div>
          <div className="row">
            <CalculatorButton addToDisplay={props.addToDisplay}>4</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>5</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>6</CalculatorButton>
          </div>
          <div className="row">
            <CalculatorButton addToDisplay={props.addToDisplay}>1</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>2</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>3</CalculatorButton>
          </div>
          <div className="row">
            <CalculatorButton addToDisplay={props.handleClear}>C</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>0</CalculatorButton>
            <CalculatorButton addToDisplay={props.handleDelete}>Del</CalculatorButton>
          </div>
        </div>
        <div className="rhythmic-unit-container">
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="1"
            unitName="quarter note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="2"
            unitName="eighth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="3"
            unitName="tuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="4"
            unitName="sixteenth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="5"
            unitName="quintuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="6"
            unitName="sextuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="7"
            unitName="septuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="8"
            unitName="thirty-second note"
          ></RhythmicUnitButton>
        </div>
      </div>
    </div>
  )
}

export default Calculator
