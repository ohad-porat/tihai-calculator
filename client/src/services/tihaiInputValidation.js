const tihaiInputValidation = (phrase, timeCycle, subdivision) => {
  let submitErrors = {}

  if (phrase.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["phrase"]: "cannot be empty",
    }
  }

  if (subdivision.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["subdivision"]: "cannot be empty",
    }
  }

  if (timeCycle.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["time cycle"]: "cannot be empty",
    }
  }

  return submitErrors
}

export default tihaiInputValidation
