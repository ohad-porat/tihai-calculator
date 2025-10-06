import React from "react";
import { RhythmicUnitButtonProps } from "../../types/tihaiCalculator";

const RhythmicUnitButton: React.FC<RhythmicUnitButtonProps> = ({
  addSubdivision,
  handleSelectedData,
  handleSelectedSubdivision,
  value,
  unitName,
}) => {
  const handleClickButton = () => {
    handleSelectedData("subdivision");
    handleSelectedSubdivision(unitName, "");
    addSubdivision(value);
  };

  return (
    <div className={`rhythmic-unit tihai ${value}`} onClick={handleClickButton}>
      Beat /{value}
    </div>
  );
};

export default RhythmicUnitButton;
