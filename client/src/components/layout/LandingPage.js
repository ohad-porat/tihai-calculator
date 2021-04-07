import React, { useState } from "react"

import Calculator from "./Calculator.js"
import GoButton from "./GoButton.js"
import ClearButton from "./ClearButton.js"

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
  const [result, setResult] = useState()
  
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
    
    const handleResult = (outcome) => {
      setResult(outcome)
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

    setResult()
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
        result={result}
        data={data}
      />
      <GoButton data={data} handleResult={handleResult} />
      <ClearButton handleClear={handleClear} />
    </div>
  )
}

export default LandingPage
