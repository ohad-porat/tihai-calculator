import React, { useState } from "react"

import Button from "./Button.js"
import ClearButton from "./ClearButton.js"
import DeleteButton from "./DeleteButton.js"
import SelectTypeButton from "./SelectTypeButton.js"
import Display from "./Display.js"

const Calculator = () => {
  const [data, setData] = useState({
    phrase: "",
    timeSignature: "",
    gap: "",
    subdivision: "",
  })
  const [selectedData, setSelectedData] = useState()

  const addToDisplay = (number) => {
    setData({
      ...data,
      [selectedData]: data[selectedData] + number,
    })
  }

  const handleSelectedData = (dataType) => {
    setSelectedData(dataType)
  }

  const handleClear = () => {
    setData({
      phrase: "",
      timeSignature: "",
      gap: "",
      subdivision: "",
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
            <ClearButton handleClear={handleClear}>C</ClearButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
