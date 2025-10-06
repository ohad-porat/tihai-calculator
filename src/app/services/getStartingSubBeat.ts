export const getStartingSubBeat = (
  overallStartingBeat: number,
  subdivision: string
): number => {
  const parsedSubdivision = parseInt(subdivision);

  const startingSubBeat = (overallStartingBeat - 1) % parsedSubdivision;

  return startingSubBeat;
};
