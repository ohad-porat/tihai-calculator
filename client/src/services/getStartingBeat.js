const getStartingBeat = (overallStartingBeat, subdivision) => {
  const parsedSubdivision = parseInt(subdivision)

  const startingBeat = ((overallStartingBeat - 1) / parsedSubdivision) + 1

  return startingBeat
}

export default getStartingBeat