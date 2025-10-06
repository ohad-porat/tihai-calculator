import React from "react";
import { MeshuggahErrorListProps } from "../../types/meshuggahCalculator";

const ErrorList: React.FC<MeshuggahErrorListProps> = ({ errors }) => {
  return (
    <div className="error-list">
      {Object.entries(errors).map(([key, value]) => (
        <div key={key} className="error-item">
          <span className="error-field">{key}:</span>
          <span className="error-message">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ErrorList;
