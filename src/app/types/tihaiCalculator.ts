export interface TihaiData {
  phrase: string;
  timeCycle: string;
  gap: string;
  subdivision: string;
}

export interface SelectedSubdivision {
  unitName: string;
  image: string;
}

export interface TihaiStart {
  overallBeat: string;
  beat: string;
  subBeat: string;
}

export interface CalculatorProps {
  addToDisplay: (number: string) => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  addSubdivision: (value: string) => void;
  selectedData: string | undefined;
  handleSelectedData: (dataType: string) => void;
  selectedSubdivision: SelectedSubdivision;
  handleSelectedSubdivision: (unitName: string, image: string) => void;
  handleDelete: () => void;
  overallStartingBeat: string;
  data: TihaiData;
  handleClear: () => void;
}

export interface DisplayProps {
  data: TihaiData;
  subdivision: SelectedSubdivision;
  overallStartingBeat: string;
}

export interface CalculatorButtonProps {
  addToDisplay: (value: string) => void;
  children: React.ReactNode;
}

export interface SelectTypeButtonProps {
  handleSelectedData: (dataType: string) => void;
  selectedData: string | undefined;
  value: string;
  children: React.ReactNode;
}

export interface RhythmicUnitButtonProps {
  addSubdivision: (value: string) => void;
  handleSelectedData: (dataType: string) => void;
  handleSelectedSubdivision: (unitName: string, image: string) => void;
  value: string;
  unitName: string;
}

export interface GoButtonProps {
  data: TihaiData;
  getResult: () => void;
}

export interface InstructionsProps {
  selectedData: string | undefined;
  errors: Record<string, string>;
  overallStartingBeat: string;
  startingBeat: string;
  startingSubBeat: string;
}

export interface ErrorListProps {
  errors: Record<string, string>;
}
