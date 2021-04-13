import React, { useState } from "react"
import _ from "lodash"

import validateInput from "../../services/validateInput.js"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"
import ClearButton from "./ClearButton.js"
import Instructions from "./Instructions.js"
import ErrorList from "./ErrorList.js"

const LandingPage = () => {
  const [data, setData] = useState({
    phrase: "",
    timeSignature: "",
    gap: "",
    subdivision: "",
  })
  const [selectedData, setSelectedData] = useState()
  const [selectedSubdivision, setSelectedSubdivision] = useState({
    unitName: "",
    image: "",
  })
  const [tihaiStartingBeat, setTihaiStartingBeat] = useState()
  const [errors, setErrors] = useState({})

  const addToDisplay = (number) => {
    if (
      selectedData === "phrase" ||
      selectedData === "timeSignature" ||
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
      timeSignature: "",
      gap: "",
      subdivision: "",
    })

    setSelectedSubdivision({
      unitName: "",
      image: "",
    })

    setTihaiStartingBeat()
  }

  const handleStartingBeat = (startAtBeat) => {
    setTihaiStartingBeat(startAtBeat)
  }

  const validateSubmission = () => {
    let submitErrors = validateInput(
      data.phrase,
      data.timeSignature,
      data.subdivision
    )

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return (
    <div className="landing-page">
      <Calculator
        addToDisplay={addToDisplay}
        addSubdivision={addSubdivision}
        selectedData={selectedData}
        handleSelectedData={handleSelectedData}
        selectedSubdivision={selectedSubdivision}
        handleSelectedSubdivision={handleSelectedSubdivision}
        handleDelete={handleDelete}
        tihaiStartingBeat={tihaiStartingBeat}
        data={data}
      />
      <div className="buttons-and-instructions">
        <GoButton
          data={data}
          handleStartingBeat={handleStartingBeat}
          validateSubmission={validateSubmission}
        />
        <ClearButton handleClear={handleClear} />
        <Instructions selectedData={selectedData} errors={errors} />
      </div>
    </div>
  )
}

export default LandingPage
