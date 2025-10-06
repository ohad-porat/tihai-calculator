import React from "react";
import { InstructionsProps } from "../../types/tihaiCalculator";
import { tihaiInstructionsText } from "../../constants/tihaiInstructionsText";
import ErrorList from "./ErrorList";

const Instructions: React.FC<InstructionsProps> = ({
  selectedData,
  errors,
  overallStartingBeat,
  startingBeat,
  startingSubBeat,
}) => {
  let header: string;
  let body: React.ReactNode;

  if (selectedData === undefined || selectedData === "") {
    header = "Welcome!";
    body = (
      <>
        <div className="welcome-message first-paragraph">
          "The Tihai is the coolest S*** invented since the Macarena". I think it was Isaac Newton
          who said that.
        </div>
        <div className="welcome-message second-paragraph">
          Welcome to the Tihai calculator! The only place geekier than your high school chemistry
          club meeting.
        </div>
        <div className="welcome-message third-paragraph">
          If you're tired of calculating Tihai starting points, this is for you. Just dial in all
          the info needed, and let us do the work for you!
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
    let tihaiStartMessageParagraph1: string;
    let tihaiStartMessageParagraph2: string = "";
    
    if (overallStartingBeat === "1") {
      tihaiStartMessageParagraph1 = `The tihai starts on beat ${startingBeat}.`;
    } else if (startingSubBeat === "0") {
      tihaiStartMessageParagraph1 = `The tihai starts on beat ${startingBeat}.`;
      const overallBeatNum = parseInt(overallStartingBeat);
      tihaiStartMessageParagraph2 = `Just count ${overallBeatNum - 1} ${
        overallBeatNum - 1 === 1 ? "sub-beat" : "sub-beats"
      } from beat 1 and start.`;
    } else {
      const subBeatNum = parseInt(startingSubBeat);
      tihaiStartMessageParagraph1 = `The tihai starts ${subBeatNum} ${
        subBeatNum === 1 ? "sub-beat" : "sub-beats"
      } after beat ${startingBeat}.`;
      const overallBeatNum = parseInt(overallStartingBeat);
      tihaiStartMessageParagraph2 = `Just count ${overallBeatNum - 1} ${
        overallBeatNum - 1 === 1 ? "sub-beat" : "sub-beats"
      } from beat 1 and start.`;
    }

    header = "";
    body = (
      <div className="result-text">
        <div className="tihai-result-p1">{tihaiStartMessageParagraph1}</div>
        <div className="tihai-result-p2">{tihaiStartMessageParagraph2}</div>
      </div>
    );
  } else {
    const textByData = tihaiInstructionsText.find((element) => element.value === selectedData);
    header = textByData?.header || "";
    body = textByData?.body || "";
  }

  return (
    <div className="instructions-container">
      <h1 className="instructions-header">{header}</h1>
      <div className="instructions-body">{body}</div>
    </div>
  );
};

export default Instructions;
