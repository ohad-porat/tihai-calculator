import React from "react";
import { GoButtonProps } from "../../types/tihaiCalculator";

const GoButton: React.FC<GoButtonProps> = ({ getResult }) => {
  return (
    <div className="go-button-container" onClick={getResult}>
      <div className="go-button">GO</div>
    </div>
  );
};

export default GoButton;
