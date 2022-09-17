function matrixElementsSum(matrix: any[][]): number {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    const isGroundFloor = i + 1 === matrix.length;
    for (let j = 0; j < matrix[i].length; j++) {
      const roomCost = matrix[i][j];
      const isValidRoom = !isGroundFloor && matrix[i + 1][j] !== 0;
      if (roomCost === 0 && isValidRoom) {
        matrix[i + 1][j] = -1;
      } else if (roomCost > 0) {
        total += roomCost;
      }
    }
  }
  console.log(matrix);
  return total;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ])
);
