import React from "react";
import { MeshuggahCalculatorProps } from "../../types/meshuggahCalculator";
import CalculatorButton from "./CalculatorButton";
import SelectTypeButton from "./SelectTypeButton";
import Display from "./Display";
import RhythmicUnitButton from "./RhythmicUnitButton";

const Calculator: React.FC<MeshuggahCalculatorProps> = (props) => {
  return (
    <div className="calculator" onKeyDown={props.handleKeyPress} tabIndex={0}>
      <div className="calc-container">
        <div className="row">
          <Display
            data={props.data}
            subdivision={props.selectedSubdivision}
            fullReps={props.fullReps}
            remainder={props.remainder}
          />
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
          <div className="button clear-button meshuggah-calc" onClick={props.handleClear}>
            Clear
          </div>
        </div>
        <div className="rhythmic-unit-container">
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="1"
            image="/rhythmicUnits/quarter.png"
            unitName="quarter note"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="2"
            image="/rhythmicUnits/eighth.png"
            unitName="eighth note"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="3"
            image="/rhythmicUnits/tuplets.png"
            unitName="tuplets"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="4"
            image="/rhythmicUnits/16th.png"
            unitName="sixteenth note"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="5"
            image="/rhythmicUnits/quintuplets.png"
            unitName="quintuplets"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="6"
            image="/rhythmicUnits/sextuplets.png"
            unitName="sextuplets"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="7"
            image="/rhythmicUnits/septuplets.png"
            unitName="septuplets"
          />
          <RhythmicUnitButton
            addSubdivision={props.addSubdivision}
            handleSelectedData={props.handleSelectedData}
            handleSelectedSubdivision={props.handleSelectedSubdivision}
            timeSignature={props.data.timeSignature}
            value="8"
            image="/rhythmicUnits/32nd.png"
            unitName="thirty-second note"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
