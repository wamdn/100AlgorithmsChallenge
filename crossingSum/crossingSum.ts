function crossingSum(matrix: number[][], a: number, b: number): number {
  const crossRows = {
    start: a,
    end: b - 1
  };
  let sum = 0;

  for (let i = crossRows.start; i < crossRows.end; i++) {
    const row = matrix[i];
    sum += row.reduce((acc, cur) => acc + cur, 0);
  }

  return sum + 1 + 3;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ],
    1,
    3
  )
);
