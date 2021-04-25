const getStartingSubBeat = (overallStartingBeat, subdivision) => {
  const parsedSubdivision = parseInt(subdivision)

  const startingSubBeat = (overallStartingBeat - 1) % parsedSubdivision

  return startingSubBeat
}

export default getStartingSubBeat