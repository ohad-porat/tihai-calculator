export const getTotalAmountOfBeats = (
  timeSignatureString: string,
  barCountString: string,
  subdivisionString: string
): number => {
  const timeSignatureArray = timeSignatureString.split("/");
  const timeSignatureUp = parseInt(timeSignatureArray[0]);
  const timeSignatureDown = parseInt(timeSignatureArray[1]);
  const barCount = parseInt(barCountString);
  let subdivision = parseInt(subdivisionString);

  if (timeSignatureDown === 8) {
    subdivision = subdivision / 2;
  } else if (timeSignatureDown === 16) {
    subdivision = subdivision / 4;
  } else if (timeSignatureDown === 32) {
    subdivision = subdivision / 8;
  }

  return timeSignatureUp * subdivision * barCount;
};
