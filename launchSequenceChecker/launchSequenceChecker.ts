function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
  if (systemNames.length !== stepNumbers.length)
    throw new Error('Invalid Argument Exception: systemNames and stepNumbers need to have the same length');

  const prevValue = new Map<string, number>();
  for (let i = 0; i < systemNames.length; i++) {
    const s = systemNames[i];
    const n = stepNumbers[i];
    if (prevValue.has(s) && prevValue.get(s) > n) return false;

    prevValue.set(s, n);
  }
  return true;
}

console.log(launchSequenceChecker(['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(['stage_1', 'stage_1', 'stage_2', 'dragon'], [2, 1, 12, 111]));
