function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDif = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const dif = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (dif > maxDif) maxDif = dif;
  }
  return maxDif;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
