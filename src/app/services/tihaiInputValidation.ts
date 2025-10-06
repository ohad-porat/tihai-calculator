export interface TihaiErrors {
  phrase?: string;
  subdivision?: string;
  "time cycle"?: string;
}

export const tihaiInputValidation = (
  phrase: string,
  timeCycle: string,
  subdivision: string
): TihaiErrors => {
  let submitErrors: TihaiErrors = {};

  if (phrase.trim() === "") {
    submitErrors = {
      ...submitErrors,
      phrase: "cannot be empty",
    };
  }

  if (subdivision.trim() === "") {
    submitErrors = {
      ...submitErrors,
      subdivision: "cannot be empty",
    };
  }

  if (timeCycle.trim() === "") {
    submitErrors = {
      ...submitErrors,
      "time cycle": "cannot be empty",
    };
  }

  return submitErrors;
};
