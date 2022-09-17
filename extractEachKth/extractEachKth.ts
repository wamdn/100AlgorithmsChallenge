function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((n, i) => {
    const nth = i + 1;
    if (nth >= k && nth % k === 0) return false;
    return true;
  });
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
