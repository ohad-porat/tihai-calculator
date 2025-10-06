import React from "react";
import { DisplayProps } from "../../types/tihaiCalculator";

const Display: React.FC<DisplayProps> = ({ data, overallStartingBeat }) => {
  return (
    <div className="display">
      <div className="data-container">
        <div className="data-item">
          P-&nbsp;<span className="digit">{data.phrase}</span>
        </div>
        <div className="data-item">
          TC-&nbsp;<span className="digit">{data.timeCycle}</span>
        </div>
        <div className="data-item">
          G-&nbsp;<span className="digit">{data.gap}</span>
        </div>
        <div className="data-item">
          S-&nbsp;Beat <span className="digit">/{data.subdivision}</span>
        </div>
      </div>
      <div className="starting-beat">
        <span className="digit">{overallStartingBeat}</span>
      </div>
    </div>
  );
};

export default Display;
