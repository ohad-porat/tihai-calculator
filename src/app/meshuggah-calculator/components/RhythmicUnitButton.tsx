import React from "react";
import { MeshuggahRhythmicUnitButtonProps } from "../../types/meshuggahCalculator";

const RhythmicUnitButton: React.FC<MeshuggahRhythmicUnitButtonProps> = ({
  addSubdivision,
  handleSelectedData,
  handleSelectedSubdivision,
  timeSignature,
  value,
  image,
  unitName,
}) => {
  const handleClick = () => {
    if (isEnabled) {
      addSubdivision(value);
      handleSelectedData("subdivision");
      handleSelectedSubdivision(unitName, image);
    }
  };

  const getUnitClass = (unitName: string) => {
    const classMap: Record<string, string> = {
      "quarter note": "quarter",
      "eighth note": "eighth", 
      "tuplets": "tuplets",
      "sixteenth note": "sixteenth",
      "quintuplets": "quintuplets",
      "sextuplets": "sextuplets",
      "septuplets": "septuplets",
      "thirty-second note": "thirty-second"
    };
    return classMap[unitName] || "";
  };

  const timeSignatureArray = timeSignature.split("/");
  const timeSignatureDown = timeSignatureArray[1];
  
  const isEnabled = 
    timeSignatureDown === "2" ||
    timeSignatureDown === "4" ||
    (timeSignatureDown === "8" &&
      (unitName === "eighth note" ||
        unitName === "sixteenth note" ||
        unitName === "sextuplets" ||
        unitName === "thirty-second note")) ||
    (timeSignatureDown === "16" &&
      (unitName === "sixteenth note" || unitName === "thirty-second note")) ||
    (timeSignatureDown === "32" && unitName === "thirty-second note");

  return (
    <div 
      className={`rhythmic-unit ${getUnitClass(unitName)} ${!isEnabled ? 'grey-out' : ''}`} 
      onClick={handleClick}
    >
      <img src={image} alt={unitName} />
    </div>
  );
};

export default RhythmicUnitButton;
