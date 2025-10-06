"use client";

import React, { useState } from "react";
import { TihaiData, SelectedSubdivision, TihaiStart } from "../../types/tihaiCalculator";
import { tihaiInputValidation } from "../../services/tihaiInputValidation";
import { getOverallStartingBeat } from "../../services/getOverallStartingBeat";
import { getStartingBeat } from "../../services/getStartingBeat";
import { getStartingSubBeat } from "../../services/getStartingSubBeat";
import Calculator from "./Calculator";
import GoButton from "./GoButton";
import Instructions from "./Instructions";

const TihaiLandingPage: React.FC = () => {
  const [data, setData] = useState<TihaiData>({
    phrase: "",
    timeCycle: "",
    gap: "",
    subdivision: "",
  });
  const [selectedData, setSelectedData] = useState<string | undefined>();
  const [selectedSubdivision, setSelectedSubdivision] = useState<SelectedSubdivision>({
    unitName: "",
    image: "",
  });
  const [tihaiStart, setTihaiStart] = useState<TihaiStart>({
    overallBeat: "",
    beat: "",
    subBeat: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const addToDisplay = (number: string) => {
    if (
      selectedData === "phrase" ||
      selectedData === "timeCycle" ||
      selectedData === "gap"
    ) {
      setData({
        ...data,
        [selectedData]: data[selectedData as keyof TihaiData] + number,
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
      selectedData === "phrase" ||
      selectedData === "timeCycle" ||
      selectedData === "gap"
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
        [selectedData]: data[selectedData as keyof TihaiData].slice(0, -1),
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
      phrase: "",
      timeCycle: "",
      gap: "",
      subdivision: "",
    });
    setSelectedData(undefined);
    setSelectedSubdivision({
      unitName: "",
      image: "",
    });
    setErrors({});
    setTihaiStart({
      overallBeat: "",
      beat: "",
      subBeat: "",
    });
  };

  const validateSubmission = (): boolean => {
    const submitErrors = tihaiInputValidation(
      data.phrase,
      data.timeCycle,
      data.subdivision
    );

    setErrors(submitErrors as Record<string, string>);
    setSelectedData("errors");
    return Object.keys(submitErrors).length === 0;
  };

  const getResult = () => {
    if (validateSubmission()) {
      const tihaiOverallBeat = getOverallStartingBeat(
        data.phrase,
        data.gap,
        data.timeCycle,
        data.subdivision
      );
      const tihaiBeat = getStartingBeat(tihaiOverallBeat, data.subdivision);
      const tihaiSubBeat = getStartingSubBeat(
        tihaiOverallBeat,
        data.subdivision
      );

      setSelectedData("result");
      setTihaiStart({
        overallBeat: tihaiOverallBeat.toString(),
        beat: Math.floor(tihaiBeat).toString(),
        subBeat: tihaiSubBeat.toString(),
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
        overallStartingBeat={tihaiStart.overallBeat}
        data={data}
        handleClear={handleClear}
      />
      <div className="buttons-and-instructions">
        <GoButton data={data} getResult={getResult} />
        <Instructions
          selectedData={selectedData}
          errors={errors}
          overallStartingBeat={tihaiStart.overallBeat}
          startingBeat={tihaiStart.beat}
          startingSubBeat={tihaiStart.subBeat}
        />
      </div>
    </div>
  );
};

export default TihaiLandingPage;
