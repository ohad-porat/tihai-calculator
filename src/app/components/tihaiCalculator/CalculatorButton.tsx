import React from "react";
import { CalculatorButtonProps } from "../../types/tihaiCalculator";

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ addToDisplay, children }) => {
  const handleClickButton = () => {
    addToDisplay(children as string);
  };

  return (
    <div className="button" onClick={handleClickButton}>
      {children}
    </div>
  );
};

export default CalculatorButton;
