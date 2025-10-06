export interface MeshuggahData {
  timeSignature: string;
  subdivision: string;
  phrase: string;
  barCount: string;
}

export interface SelectedSubdivision {
  unitName: string;
  image: string;
}

export interface MeshuggahResult {
  fullReps: string;
  remainder: string;
}

export interface MeshuggahCalculatorProps {
  addToDisplay: (number: string) => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  addSubdivision: (value: string) => void;
  selectedData: string | undefined;
  handleSelectedData: (dataType: string) => void;
  selectedSubdivision: SelectedSubdivision;
  handleSelectedSubdivision: (unitName: string, image: string) => void;
  handleDelete: () => void;
  fullReps: string;
  remainder: string;
  data: MeshuggahData;
  handleClear: () => void;
}

export interface MeshuggahDisplayProps {
  data: MeshuggahData;
  subdivision: SelectedSubdivision;
  fullReps: string;
  remainder: string;
}

export interface MeshuggahCalculatorButtonProps {
  addToDisplay: (value: string) => void;
  children: React.ReactNode;
}

export interface MeshuggahSelectTypeButtonProps {
  handleSelectedData: (dataType: string) => void;
  selectedData: string | undefined;
  value: string;
  children: React.ReactNode;
}

export interface MeshuggahRhythmicUnitButtonProps {
  addSubdivision: (value: string) => void;
  handleSelectedData: (dataType: string) => void;
  handleSelectedSubdivision: (unitName: string, image: string) => void;
  timeSignature: string;
  value: string;
  image: string;
  unitName: string;
}

export interface MeshuggahGoButtonProps {
  data: MeshuggahData;
  getResult: () => void;
}

export interface MeshuggahInstructionsProps {
  selectedData: string | undefined;
  errors: Record<string, string>;
  fullReps: string;
  remainder: string;
}

export interface MeshuggahErrorListProps {
  errors: Record<string, string>;
}
