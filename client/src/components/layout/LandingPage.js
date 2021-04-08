import React, { useState } from "react"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"

const LandingPage = () => {
  const [data, setData] = useState({
    phrase: "",
    timeSignature: "",
    gap: "",
    subdivision: "",
  })
  const [selectedData, setSelectedData] = useState()
  const [tihaiStartingBeat, setTihaiStartingBeat] = useState()

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

  const handleDelete = () => {
    setData({
      ...data,
      [selectedData]: data[selectedData].slice(0, -1),
    })
  }

  const handleSelectedData = (dataType) => {
    setSelectedData(dataType)
  }

  const handleStartingBeat = (startAtBeat) => {
    setTihaiStartingBeat(startAtBeat)
  }

  return (
    <div className="landing-page">
      <Calculator
        addToDisplay={addToDisplay}
        addSubdivision={addSubdivision}
        handleDelete={handleDelete}
        selectedData={selectedData}
        handleSelectedData={handleSelectedData}
        tihaiStartingBeat={tihaiStartingBeat}
        data={data}
      />
      <GoButton data={data} handleStartingBeat={handleStartingBeat} />
    </div>
  )
}

export default LandingPage
