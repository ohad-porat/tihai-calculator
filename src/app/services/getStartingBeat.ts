export const getStartingBeat = (
  overallStartingBeat: number,
  subdivision: string
): number => {
  const parsedSubdivision = parseInt(subdivision);

  const startingBeat = ((overallStartingBeat - 1) / parsedSubdivision) + 1;

  return startingBeat;
};
