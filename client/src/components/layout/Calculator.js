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

  const addToDisplay = (number) => {
    setData({
      ...data,
      phrase: data.phrase + number,
    })
  }

  const handleDelete = () => {
    setData({
      ...data,
      phrase: data.phrase.slice(0, -1),
    })
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
          <SelectTypeButton>Phrase</SelectTypeButton>
          <SelectTypeButton>Time Signature</SelectTypeButton>
        </div>
        <div className="row">
          <SelectTypeButton>Gap</SelectTypeButton>
          <SelectTypeButton>Subdivision</SelectTypeButton>
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
