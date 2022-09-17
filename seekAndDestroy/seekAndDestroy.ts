function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  const filter = new Map<number, boolean>();
  for (const n of arr2) {
    filter.set(n, true);
  }
  return arr1.filter(n => !filter.has(n));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
