import React from "react";
import { MeshuggahGoButtonProps } from "../../types/meshuggahCalculator";

const GoButton: React.FC<MeshuggahGoButtonProps> = ({ getResult }) => {
  return (
    <div className="go-button-container" onClick={getResult}>
      <div className="go-button">GO</div>
    </div>
  );
};

export default GoButton;
