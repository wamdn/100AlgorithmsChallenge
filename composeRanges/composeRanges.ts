function composeRanges(nums: number[]): string[] {
  const ranges: string[] = [`${nums[0]}`];
  let lastNbr = nums[0];

  for (const n of nums) {
    if (lastNbr + 1 < n) {
      ranges[ranges.length - 1] += `->${lastNbr}`;
      ranges.push(`${n}`);
    }
    lastNbr = n;
  }

  return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
