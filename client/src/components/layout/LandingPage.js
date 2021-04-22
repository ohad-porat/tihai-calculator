import React, { useState } from "react"
import _ from "lodash"

import validateInput from "../../services/validateInput.js"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"
import Instructions from "./Instructions.js"

const LandingPage = () => {
  const [data, setData] = useState({
    phrase: "",
    timeCycle: "",
    gap: "",
    subdivision: "",
  })
  const [selectedData, setSelectedData] = useState()
  const [selectedSubdivision, setSelectedSubdivision] = useState({
    unitName: "",
    image: "",
  })
  const [tihaiStartingBeat, setTihaiStartingBeat] = useState()
  const [tihaiStartingBar, setTihaiStartingBar] = useState()
  const [errors, setErrors] = useState({})

  const addToDisplay = (number) => {
    if (
      selectedData === "phrase" ||
      selectedData === "timeCycle" ||
      selectedData === "gap"
    ) {
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
  
    const handleKeyPress = (event) => {
      if (
        selectedData === "phrase" ||
        selectedData === "timeCycle" ||
        selectedData === "gap"
      ) {
        if (Number.isInteger(parseInt(event.key))) {
          addToDisplay(event.key)
        } else if (event.key === "Backspace") {
          handleDelete()
        }
      }

      if (event.key === "Enter") {
        getTihaiStartingBeatAndBar()
      }
    }
  
  const handleSelectedData = (dataType) => {
    setSelectedData(dataType)
  }

  const handleSelectedSubdivision = (unitName, image) => {
    setSelectedSubdivision({
      unitName: unitName,
      image: image,
    })
  }

  const handleDelete = () => {
    setData({
      ...data,
      [selectedData]: data[selectedData].slice(0, -1),
    })

    if (selectedData === "subdivision") {
      setSelectedSubdivision({
        unitName: "",
        image: "",
      })

      setData({
        ...data,
        [selectedData]: "",
      })
    }
  }

  const handleClear = () => {
    setData({
      phrase: "",
      timeCycle: "",
      gap: "",
      subdivision: "",
    })
    setSelectedData()
    setSelectedSubdivision({
      unitName: "",
      image: "",
    })
    setErrors({})
    setTihaiStartingBeat()
  }

  const handleStartingBeat = (startAtBeat) => {
    setTihaiStartingBeat(startAtBeat)
  }

  const handleStartingBar = (startBar) => {
    setTihaiStartingBar(startBar)
  }

  const validateSubmission = () => {
    let submitErrors = validateInput(
      data.phrase,
      data.timeCycle,
      data.subdivision
    )

    setErrors(submitErrors)
    setSelectedData("errors")
    return _.isEmpty(submitErrors)
  }

  const getTihaiStartingBeatAndBar = () => {
    const phrase = parseInt(data.phrase)
    const gap = data.gap === "" ? 0 : parseInt(data.gap)
    const timeCycle = parseInt(data.timeCycle)
    const subdivision = parseInt(data.subdivision)
    
    if (validateSubmission()) {
      const length = phrase * 3 + gap * 2
      const cycle = timeCycle * subdivision

        const remainder = length % cycle 
        const tihaiStartingBeat = cycle - remainder + 1 

      handleSelectedData("result")
      handleStartingBeat(tihaiStartingBeat)
      
      const tihaiStartingBar = 0
      handleStartingBar(tihaiStartingBar)
      }
    }

  return (
    <div className="landing-page">
      <Calculator
        addToDisplay={addToDisplay}
        handleKeyPress={handleKeyPress}
        addSubdivision={addSubdivision}
        selectedData={selectedData}
        handleSelectedData={handleSelectedData}
        selectedSubdivision={selectedSubdivision}
        handleSelectedSubdivision={handleSelectedSubdivision}
        handleDelete={handleDelete}
        tihaiStartingBeat={tihaiStartingBeat}
        data={data}
        handleClear={handleClear}
      />
      <div className="buttons-and-instructions">
        <GoButton
          data={data}
          handleStartingBeat={handleStartingBeat}
          handleStartingBar={handleStartingBar}
          handleSelectedData={handleSelectedData}
          getTihaiStartingBeatAndBar={getTihaiStartingBeatAndBar}
        />
        <Instructions
          selectedData={selectedData}
          errors={errors}
          tihaiStartingBeat={tihaiStartingBeat}
          tihaiStartingBar={tihaiStartingBar}
        />
      </div>
    </div>
  )
}

export default LandingPage
