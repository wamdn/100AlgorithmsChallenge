function palindromeRearranging(inputString: string): boolean {
  // max one char count can be odd, the rest need to be even.
  const frequencyCounter = new Map<string, number>();
  let oddCount = 0;
  for (const char of inputString) {
    frequencyCounter.set(char, frequencyCounter.get(char) + 1 || 1);
  }
  frequencyCounter.forEach(count => {
    if (count % 2 !== 0) oddCount++;
  });
  if (oddCount > 1) return false;
  return true;
}

console.log(palindromeRearranging('aabb'));
