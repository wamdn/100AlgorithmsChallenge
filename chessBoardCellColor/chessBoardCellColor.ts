type Coord = {
  x: number;
  y: number;
};

function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const cell1Coord = cellToCoords(cell1);
  const cell2Coord = cellToCoords(cell2);

  return (cell1Coord.x + cell1Coord.y) % 2 === (cell2Coord.x + cell2Coord.y) % 2 ? true : false;
}

function alphabetToCoord(char: string): number {
  const charCode = char.charCodeAt(0);
  // maj
  if (charCode >= 65 && charCode <= 90) return charCode - 64;
  // min
  if (charCode >= 97 && charCode <= 122) return charCode - 96;

  throw new Error('Invalid Argument Exception: invalid character');
}

function cellToCoords(cell: string): Coord {
  const coord: Coord = {
    x: alphabetToCoord(cell[0]),
    y: parseInt(cell[1], 10)
  };

  return coord;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
