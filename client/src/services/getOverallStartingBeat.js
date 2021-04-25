const getOverallStartingBeat = (phrase, gap, timeCycle, subdivision) => {
  const parsedPhrase = parseInt(phrase)
  const parsedGap = gap === "" ? 0 : parseInt(gap)
  const parsedTimeCycle = parseInt(timeCycle)
  const parsedSubdivision = parseInt(subdivision)

  const length = parsedPhrase * 3 + parsedGap * 2
  const cycle = parsedTimeCycle * parsedSubdivision

  const remainder = length % cycle
  let overallStartingBeat
  if (remainder === 0) {
    overallStartingBeat = 1
  } else {
    overallStartingBeat = cycle - remainder + 1
  }

  return overallStartingBeat
}

export default getOverallStartingBeat
