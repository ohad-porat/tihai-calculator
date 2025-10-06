import React from "react";
import { MeshuggahSelectTypeButtonProps } from "../../types/meshuggahCalculator";

const SelectTypeButton: React.FC<MeshuggahSelectTypeButtonProps> = ({
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
      className={`button select-button meshuggah ${highlightClass}`}
      onClick={handleClickButton}
    >
      {children}
    </div>
  );
};

export default SelectTypeButton;
