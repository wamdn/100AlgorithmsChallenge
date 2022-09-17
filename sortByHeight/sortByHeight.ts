function sortByHeight(a: number[]): number[] {
  const sorted = [...a].sort((a, b) => a - b).filter(n => n !== -1);
  const result: number[] = [];
  for (let i = 0, j = 0; i < a.length; i++) {
    const n = a[i];
    if (n !== -1) {
      result.push(sorted[j]);
      j++;
      continue;
    }
    result.push(n);
  }
  return result;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
