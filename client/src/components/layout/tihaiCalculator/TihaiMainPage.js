import React, { useState } from "react"
import _ from "lodash"

import tihaiInputValidation from "../../../services/tihaiInputValidation.js"
import getOverallStartingBeat from "../../../services/getOverallStartingBeat.js"
import getStartingBeat from "../../../services/getStartingBeat.js"
import getStartingSubBeat from "../../../services/getStartingSubBeat.js"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"
import Instructions from "./Instructions.js"

const TihaiMainPage = () => {
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
  const [tihaiStart, setTihaiStart] = useState({
    overallBeat: "",
    beat: "",
    subBeat: "",
  })
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
    setTihaiStart({
      overallBeat: "",
      beat: "",
      subBeat: "",
    })
  }

  const validateSubmission = () => {
    let submitErrors = tihaiInputValidation(
      data.phrase,
      data.timeCycle,
      data.subdivision
    )

    setErrors(submitErrors)
    setSelectedData("errors")
    return _.isEmpty(submitErrors)
  }

  const getResult = () => {
    if (validateSubmission()) {
      const tihaiOverallBeat = getOverallStartingBeat(
        data.phrase,
        data.gap,
        data.timeCycle,
        data.subdivision
      )
      const tihaiBeat = getStartingBeat(tihaiOverallBeat, data.subdivision)
      const tihaiSubBeat = getStartingSubBeat(
        tihaiOverallBeat,
        data.subdivision
      )

      setSelectedData("result")
      setTihaiStart({
        overallBeat: tihaiOverallBeat,
        beat: Math.floor(tihaiBeat),
        subBeat: tihaiSubBeat,
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
        overallStartingBeat={tihaiStart.overallBeat}
        data={data}
        handleClear={handleClear}
      />
      <div className="buttons-and-instructions">
        <GoButton data={data} getResult={getResult} />
        <Instructions
          selectedData={selectedData}
          errors={errors}
          overallStartingBeat={tihaiStart.overallBeat}
          startingBeat={tihaiStart.beat}
          startingSubBeat={tihaiStart.subBeat}
        />
      </div>
    </div>
  )
}

export default TihaiMainPage
