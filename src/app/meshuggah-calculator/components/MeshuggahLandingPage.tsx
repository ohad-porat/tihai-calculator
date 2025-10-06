"use client";

import React, { useState } from "react";
import { MeshuggahData, SelectedSubdivision, MeshuggahResult } from "../../types/meshuggahCalculator";
import { meshuggahInputValidation } from "../../services/meshuggahInputValidation";
import { getTotalAmountOfBeats } from "../../services/getTotalAmountOfBeats";
import Calculator from "./Calculator";
import GoButton from "./GoButton";
import Instructions from "./Instructions";

const MeshuggahLandingPage: React.FC = () => {
  const [data, setData] = useState<MeshuggahData>({
    timeSignature: "",
    subdivision: "",
    phrase: "",
    barCount: "",
  });
  const [selectedData, setSelectedData] = useState<string | undefined>();
  const [selectedSubdivision, setSelectedSubdivision] = useState<SelectedSubdivision>({
    unitName: "",
    image: "",
  });
  const [result, setResult] = useState<MeshuggahResult>({
    fullReps: "",
    remainder: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const addToDisplay = (number: string) => {
    if (
      selectedData === "timeSignature" ||
      selectedData === "phrase" ||
      selectedData === "barCount"
    ) {
      setData({
        ...data,
        [selectedData]: data[selectedData as keyof MeshuggahData] + number,
      });
    }
  };

  const addSubdivision = (value: string) => {
    setData({
      ...data,
      subdivision: value,
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (
      selectedData === "timeSignature" ||
      selectedData === "phrase" ||
      selectedData === "barCount"
    ) {
      if (Number.isInteger(parseInt(event.key))) {
        addToDisplay(event.key);
      } else if (event.key === "Backspace") {
        handleDelete();
      }
    }

    if (event.key === "Enter") {
      getResult();
    }
  };

  const handleSelectedData = (dataType: string) => {
    setSelectedData(dataType);
  };

  const handleSelectedSubdivision = (unitName: string, image: string) => {
    setSelectedSubdivision({
      unitName: unitName,
      image: image,
    });
  };

  const handleDelete = () => {
    if (selectedData) {
      setData({
        ...data,
        [selectedData]: data[selectedData as keyof MeshuggahData].slice(0, -1),
      });

      if (selectedData === "subdivision") {
        setSelectedSubdivision({
          unitName: "",
          image: "",
        });

        setData({
          ...data,
          subdivision: "",
        });
      }
    }
  };

  const handleClear = () => {
    setData({
      timeSignature: "",
      subdivision: "",
      phrase: "",
      barCount: "",
    });
    setSelectedData(undefined);
    setSelectedSubdivision({
      unitName: "",
      image: "",
    });
    setErrors({});
    setResult({
      fullReps: "",
      remainder: "",
    });
  };

  const validateSubmission = (): boolean => {
    const submitErrors = meshuggahInputValidation(
      data.timeSignature,
      data.subdivision,
      data.phrase,
      data.barCount
    );

    setErrors(submitErrors);
    setSelectedData("errors");
    return Object.keys(submitErrors).length === 0;
  };

  const getResult = () => {
    if (validateSubmission()) {
      const phrase = parseInt(data.phrase);
      const totalAmountOfBeats = getTotalAmountOfBeats(
        data.timeSignature,
        data.barCount,
        data.subdivision
      );
      const fullRepsResult = Math.floor(totalAmountOfBeats / phrase);
      const remainderResult = totalAmountOfBeats % phrase;

      setSelectedData("result");
      setResult({
        fullReps: fullRepsResult.toString(),
        remainder: remainderResult.toString(),
      });
    }
  };

  return (
    <div className="landing-page">
      <Calculator
        addToDisplay={addToDisplay}
        handleKeyPress={handleKeyPress}
        addSubdivision={addSubdivision}
        selectedData={selectedData}
        handleSelectedData={handleSelectedData}
        selectedSubdivision={selectedSubdivision}
        handleSelectedSubdivision={handleSelectedSubdivision}
        handleDelete={handleDelete}
        fullReps={result.fullReps}
        remainder={result.remainder}
        data={data}
        handleClear={handleClear}
      />
      <div className="buttons-and-instructions">
        <GoButton data={data} getResult={getResult} />
        <Instructions
          selectedData={selectedData}
          errors={errors}
          fullReps={result.fullReps}
          remainder={result.remainder}
        />
      </div>
    </div>
  );
};

export default MeshuggahLandingPage;
