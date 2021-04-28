const meshuggahInputValidation = (timeSignature, subdivision, phrase, barCount) => {
  let submitErrors = {}

  if (timeSignature.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["time signature"]: "cannot be empty",
    }
  }

  if (subdivision.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["subdivision"]: "cannot be empty",
    }
  }

  if (phrase.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["phrase"]: "cannot be empty",
    }
  }

  if (barCount.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["bar count"]: "cannot be empty",
    }
  }

  return submitErrors
}

export default meshuggahInputValidation
