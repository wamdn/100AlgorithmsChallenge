function extractMatrixColumn(matrix: number[][], column: number): number[] {
  if (column > matrix.length) throw new Error('Argument Out Of Range Exception: column');

  const columnValue = [];
  for (const row of matrix) {
    columnValue.push(row[column]);
  }
  return columnValue;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);
