import React, { useState } from "react"
import _ from "lodash"

import meshuggahInputValidation from "../../../services/meshuggahInputValidation.js"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"
import Instructions from "./Instructions.js"

const MeshuggahMainPage = () => {
  const [data, setData] = useState({
    timeSignature: "",
    subdivision: "",
    phrase: "",
    barCount: "",
  })
  const [selectedData, setSelectedData] = useState()
  const [selectedSubdivision, setSelectedSubdivision] = useState({
    unitName: "",
    image: "",
  })
  const [result, setResult] = useState({
    fullReps: "",
    remainder: "",
  })
  const [errors, setErrors] = useState({})

  const addToDisplay = (number) => {
    if (
      selectedData === "timeSignature" ||
      selectedData === "phrase" ||
      selectedData === "barCount"
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
      selectedData === "timeSignature" ||
      selectedData === "phrase" ||
      selectedData === "barCount"
    ) {
      if (Number.isInteger(parseInt(event.key))) {
        addToDisplay(event.key)
      } else if (event.key === "Backspace") {
        handleDelete()
      }
    }

    if (event.key === "Enter") {
      getResult()
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
      timeSignature: "",
      subdivision: "",
      phrase: "",
      barCount: "",
    })
    setSelectedData()
    setSelectedSubdivision({
      unitName: "",
      image: "",
    })
    setErrors({})
    setResult({
      overallBeat: "",
      beat: "",
      subBeat: "",
    })
  }

  const validateSubmission = () => {
    let submitErrors = meshuggahInputValidation(
      data.timeSignature,
      data.subdivision,
      data.phrase,
      data.barCount
    )

    setErrors(submitErrors)
    setSelectedData("errors")
    return _.isEmpty(submitErrors)
  }

  const getResult = () => {
    if (validateSubmission()) {
      setSelectedData("result")
      setResult({
        fullReps: data.phrase + 2,
        remainder: data.barCount + 1,
      })
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
        fullReps={result.fullReps}
        remainder={result.remainder}
        data={data}
        handleClear={handleClear}
      />
      <div className="buttons-and-instructions">
        <GoButton data={data} getResult={getResult} />
        <Instructions
          selectedData={selectedData}
          errors={errors}
          fullReps={result.fullReps}
          remainder={result.remainder}
        />
      </div>
    </div>
  )
}

export default MeshuggahMainPage
