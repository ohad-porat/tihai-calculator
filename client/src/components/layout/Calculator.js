import React from "react"

import Button from "./Button.js"

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </div>
        <div className="row">
          <Button>D</Button>
          <Button>0</Button>
          <Button>C</Button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
