const validateInput = (phrase, timeSignature, subdivision) => {
  let submitErrors = {}
  const timeSignatureArray = timeSignature.split("/")
  const timeSignatureDown = timeSignatureArray[1]

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

  if (timeSignature.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["time signature"]: "cannot be empty",
    }
  }

  return submitErrors
}

export default validateInput
