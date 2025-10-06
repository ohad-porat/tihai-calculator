import React from "react";
import { MeshuggahInstructionsProps } from "../../types/meshuggahCalculator";
import { meshuggahInstructionsText } from "../../constants/meshuggahInstructionsText";
import ErrorList from "./ErrorList";

const Instructions: React.FC<MeshuggahInstructionsProps> = ({
  selectedData,
  errors,
  fullReps,
  remainder,
}) => {
  let header: React.ReactNode;
  let body: React.ReactNode;

  if (selectedData === undefined || selectedData === "") {
    header = (
      <>
        The <img src="/meshuggahLogo.png" alt="Meshuggah Logo" className="meshuggah-logo" /> Calculator
      </>
    );
    body = (
      <>
        <div className="welcome-message first-paragraph">
          The Meshuggah calculator is here to help us with annoying math segments we want to play but are too lazy to calculate.
        </div>
        <div className="welcome-message second-paragraph">
          This calculator will calculate how many phrases can a certain section contain and is a great tool for composing and writing Meshuggah style riffs!
        </div>
        <div className="welcome-message third-paragraph">
          To see some examples, click{" "}
          <a href="https://www.youtube.com/watch?v=LGB-7viJrv0&t=873s" target="_blank" rel="noopener noreferrer">
            here
          </a>
        </div>
      </>
    );
  } else if (selectedData === "errors") {
    header = "";
    body = (
      <div className="error-list">
        <ErrorList errors={errors} />
      </div>
    );
  } else if (selectedData === "result") {
    header = "";
    body = (
      <div className="result-text">
        This section contains {fullReps} full {fullReps === "1" ? "rep" : "reps"} of the phrase and a remainder of {remainder} beats.
      </div>
    );
  } else {
    const textByData = meshuggahInstructionsText.find(
      (element) => element.value === selectedData
    );
    if (textByData) {
      header = textByData.header;
      body = textByData.body;
    } else {
      header = "";
      body = "";
    }
  }

  return (
    <div className="instructions-container">
      <h1 className="instructions-header">{header}</h1>
      <div className="instructions-body">{body}</div>
    </div>
  );
};

export default Instructions;
