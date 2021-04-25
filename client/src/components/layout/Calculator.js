import React from "react"

import quarter from "../../assets/images/rhythmicUnits/quarter.png"
import eighth from "../../assets/images/rhythmicUnits/eighth.png"
import tuplet from "../../assets/images/rhythmicUnits/tuplets.png"
import sixteenth from "../../assets/images/rhythmicUnits/16th.png"
import quintuplets from "../../assets/images/rhythmicUnits/quintuplets.png"
import sextuplets from "../../assets/images/rhythmicUnits/sextuplets.png"
import septuplets from "../../assets/images/rhythmicUnits/septuplets.png"
import thirtyTwo from "../../assets/images/rhythmicUnits/32nd.png"

import NumberButton from "./NumberButton.js"
import DeleteButton from "./DeleteButton.js"
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
            <NumberButton addToDisplay={props.addToDisplay}>7</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>8</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>9</NumberButton>
          </div>
          <div className="row">
            <NumberButton addToDisplay={props.addToDisplay}>4</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>5</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>6</NumberButton>
          </div>
          <div className="row">
            <NumberButton addToDisplay={props.addToDisplay}>1</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>2</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>3</NumberButton>
          </div>
          <div className="row">
            <NumberButton addToDisplay={props.handleClear}>C</NumberButton>
            <NumberButton addToDisplay={props.addToDisplay}>0</NumberButton>
            <DeleteButton handleDelete={props.handleDelete}>Del</DeleteButton>
          </div>
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
