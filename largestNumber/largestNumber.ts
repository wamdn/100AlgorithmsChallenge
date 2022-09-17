function largestNumber(n: number): number {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result = result * 10 + 9;
  }
  return result;
}

console.log(largestNumber(2));
