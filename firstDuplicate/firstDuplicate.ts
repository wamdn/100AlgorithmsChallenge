function firstDuplicate(a: number[]): number {
  const freqCount = new Map<number, boolean>();
  for (const n of a) {
    if (freqCount.has(n)) return n;
    freqCount.set(n, true);
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
