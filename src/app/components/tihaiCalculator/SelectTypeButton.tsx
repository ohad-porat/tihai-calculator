import React from "react";
import { SelectTypeButtonProps } from "../../types/tihaiCalculator";

const SelectTypeButton: React.FC<SelectTypeButtonProps> = ({
  handleSelectedData,
  selectedData,
  value,
  children,
}) => {
  const handleClickButton = () => {
    if (selectedData !== value) {
      handleSelectedData(value);
    } else {
      handleSelectedData("");
    }
  };

  let highlightClass = "";
  if (selectedData === value) {
    highlightClass = "highlight-button";
  }

  return (
    <div
      className={`button select-button ${highlightClass}`}
      onClick={handleClickButton}
    >
      {children}
    </div>
  );
};

export default SelectTypeButton;
