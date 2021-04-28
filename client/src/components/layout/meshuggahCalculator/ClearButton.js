import React from "react"

const ClearButton = (props) => {
  const handleClickButton = () => {
    props.handleClear()
  }

  return (
    <div className="button clear-button meshuggah-calc" onClick={handleClickButton}>
      {props.children}
    </div>
  )
}

export default ClearButton
