function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let prevSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    prevSum += inputArray[i];
  }

  maxSum = prevSum;

  for (let i = 0, j = k; j < inputArray.length; i++, j++) {
    prevSum += inputArray[j] - inputArray[i];
    if (prevSum > maxSum) maxSum = prevSum;
  }

  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
