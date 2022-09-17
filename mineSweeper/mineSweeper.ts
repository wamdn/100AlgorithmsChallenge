function minesweeper(matrix: boolean[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = countMines(matrix, i, j);
    }
  }
  return result;
}

function countMines(m: boolean[][], x, y): number {
  const mines = [
    getCell(m, x, y - 1), // left
    getCell(m, x, y + 1), // right
    getCell(m, x - 1, y), // top
    getCell(m, x + 1, y), // bottom
    getCell(m, x - 1, y - 1), // top left
    getCell(m, x - 1, y + 1), // top right
    getCell(m, x + 1, y - 1), // bottom left
    getCell(m, x + 1, y + 1) // bottom right
  ];
  let mineCount = 0;
  for (const mine of mines) {
    if (mine) mineCount++;
  }
  return mineCount;
}

function getCell(m: boolean[][], x, y): boolean {
  if (m[x] && m[x][y]) {
    return m[x][y];
  }
  return false;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);
