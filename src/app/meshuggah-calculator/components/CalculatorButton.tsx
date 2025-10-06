import React from "react";
import { MeshuggahCalculatorButtonProps } from "../../types/meshuggahCalculator";

const CalculatorButton: React.FC<MeshuggahCalculatorButtonProps> = ({ addToDisplay, children }) => {
  return (
    <div className="button" onClick={() => addToDisplay(children as string)}>
      {children}
    </div>
  );
};

export default CalculatorButton;
