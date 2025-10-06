import React from "react";
import { ErrorListProps } from "../../types/tihaiCalculator";

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  const errorFields = Object.keys(errors);
  if (errorFields.length > 0) {
    let index = 0;
    const listItems = errorFields.map((field) => {
      index++;
      return (
        <li key={index}>
          {field.charAt(0).toUpperCase() + field.slice(1)} {errors[field]}
        </li>
      );
    });
    return <ul>{listItems}</ul>;
  } else {
    return null;
  }
};

export default ErrorList;
