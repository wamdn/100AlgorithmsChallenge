function squareDigitsSequence(a0: number): number {
  const values = new Map<number, boolean>();
  const sequence: number[] = [];

  values.set(a0, true);
  sequence.push(a0);

  while (true) {
    const prevValue = sequence[sequence.length - 1];
    const v = squareDigitsSum(prevValue);
    sequence.push(v);

    if (values.has(v)) break;
    values.set(v, true);
  }

  return sequence.length;
}

function squareDigitsSum(n: number): number {
  let sum = 0;
  while (n !== 0) {
    const d = n % 10;
    n = (n - d) / 10;
    sum += Math.pow(d, 2);
  }
  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
