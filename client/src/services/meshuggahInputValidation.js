const meshuggahInputValidation = (timeSignature, subdivision, phrase, barCount) => {
  let submitErrors = {}
  const timeSignatureArray = timeSignature.split("/")
  const timeSignatureDown = timeSignatureArray[1]

  if (timeSignature.trim() === "") {
    submitErrors = {
      ...submitErrors,
      ["time signature"]: "cannot be empty",
    }
  }

  if (!timeSignature.includes("/") && timeSignature.trim() !== "") {
    submitErrors = {
      ...submitErrors,
      ["time signature"]: "top and bottom numbers needs to be divided by a '/ '",
    }
  }

  if (
    timeSignatureDown !== "2" &&
    timeSignatureDown !== "4" &&
    timeSignatureDown !== "8" &&
    timeSignatureDown !== "16" &&
    timeSignatureDown !== "32" &&
    timeSignature.trim() !== "" &&
    timeSignature.includes("/")
  ) {
    submitErrors = {
      ...submitErrors,
      ["time signature"]: "bottom number can only be 2, 4, 8, 16 or 32",
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
