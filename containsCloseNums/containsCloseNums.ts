function containsCloseNums(nums: number[], k: number): boolean {
  const freqCount = {};
  let indexDiff: number = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (freqCount[n]) {
      indexDiff = i - freqCount[n][0];
      break;
    }

    freqCount[n] = [i];
  }

  // no double
  if (!indexDiff) return false;

  return k >= indexDiff;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
