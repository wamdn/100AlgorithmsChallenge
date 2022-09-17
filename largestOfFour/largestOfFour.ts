function largestOfFour(nums: number[][]): number[] {
  const maxValues: number[] = [];
  for (const nbrs of nums) {
    let maxNbr = nbrs[0];
    for (let i = 1; i < nbrs.length; i++) {
      const n = nbrs[i];
      if (n > maxNbr) maxNbr = n;
    }
    maxValues.push(maxNbr);
  }
  return maxValues;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);
