import React from "react"

import quarter from "../../../assets/images/rhythmicUnits/quarter.png"
import eighth from "../../../assets/images/rhythmicUnits/eighth.png"
import tuplet from "../../../assets/images/rhythmicUnits/tuplets.png"
import sixteenth from "../../../assets/images/rhythmicUnits/16th.png"
import quintuplets from "../../../assets/images/rhythmicUnits/quintuplets.png"
import sextuplets from "../../../assets/images/rhythmicUnits/sextuplets.png"
import septuplets from "../../../assets/images/rhythmicUnits/septuplets.png"
import thirtyTwo from "../../../assets/images/rhythmicUnits/32nd.png"

import CalculatorButton from "./CalculatorButton.js"
import ClearButton from "./ClearButton.js"
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
            fullReps={props.fullReps}
            remainder={props.remainder}
          ></Display>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="timeSignature"
          >
            Time Signature
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="phrase"
          >
            Phrase
          </SelectTypeButton>
        </div>
        <div className="row">
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="subdivision"
          >
            Subdivision
          </SelectTypeButton>
          <SelectTypeButton
            handleSelectedData={props.handleSelectedData}
            selectedData={props.selectedData}
            value="barCount"
          >
            Bar Count
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
            <CalculatorButton addToDisplay={props.addToDisplay}>/</CalculatorButton>
            <CalculatorButton addToDisplay={props.addToDisplay}>0</CalculatorButton>
            <CalculatorButton addToDisplay={props.handleDelete}>Del</CalculatorButton>
          </div>
          <ClearButton handleClear={props.handleClear}>Clear</ClearButton>
        </div>
        <div className="rhythmic-unit-container">
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="1"
            image={quarter}
            unitName="quarter note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="2"
            image={eighth}
            unitName="eighth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="3"
            image={tuplet}
            unitName="tuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="4"
            image={sixteenth}
            unitName="sixteenth note"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="5"
            image={quintuplets}
            unitName="quintuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="6"
            image={sextuplets}
            unitName="sextuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            value="7"
            image={septuplets}
            unitName="septuplets"
          ></RhythmicUnitButton>
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
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
