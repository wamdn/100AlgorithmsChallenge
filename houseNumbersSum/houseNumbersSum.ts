function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;
  for (const n of inputArray) {
    if (n === 0) break;
    sum += n;
  }
  return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
