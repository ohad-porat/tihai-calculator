import React, {useState} from "react"

import Button from "./Button.js"
import ClearButton from "./ClearButton.js"
import DeleteButton from "./DeleteButton.js"
import Display from "./Display.js"

const Calculator = () => {
  const [data, setData] = useState({
    phrase: "",
  })

  const addToDisplay = (number) => {
    setData({ phrase: data.phrase + number })
  }

  const handleClear = () => {
    setData({
      phrase: "",
    })
  }

  const handleDelete = () => {
    setData({
      phrase: data.phrase.slice(0, -1),
    })
  }

  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="row">
          <Display data={data}></Display>
        </div>
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
          <DeleteButton handleDelete={handleDelete}>D</DeleteButton>
          <Button addToDisplay={addToDisplay}>0</Button>
          <ClearButton handleClear={handleClear}>C</ClearButton>
        </div>
      </div>
    </div>
  )
}

export default Calculator
