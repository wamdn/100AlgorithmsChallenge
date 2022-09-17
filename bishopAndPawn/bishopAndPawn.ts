function bishopAndPawn(bishop: string, pawn: string): boolean {
  const bishopPos = getPosition(bishop);
  const pawnPos = getPosition(pawn);

  return Math.abs(bishopPos.x - pawnPos.x) - Math.abs(bishopPos.y - pawnPos.y) === 0;
}

interface Position {
  x: number;
  y: number;
}

function getPosition(code: string): Position {
  const bishopPos = {
    x: code.charCodeAt(0) - 96,
    y: parseInt(code[1])
  };

  return bishopPos as Position;
}

console.log(bishopAndPawn('a1', 'c3'));
