function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const bMap = new Map<number, boolean>();
  for (const n of b) {
    bMap.set(n, true);
  }
  for (const n of a) {
    const numberToFind = v - n;
    if (bMap.get(numberToFind)) return true;
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
