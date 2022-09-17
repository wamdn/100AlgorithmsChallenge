function uniqueDigitProducts(a: number[]): number {
  const diff = new Map<number, boolean>();
  for (const x of a) {
    const p = product(x);
    if (diff.has(p)) continue;
    diff.set(p, true);
  }
  return diff.size;
}

function product(x: number): number {
  if (x < 10 && x > -10) return x;

  let result = 1;
  while (x !== 0) {
    const d = x % 10;
    x = (x - d) / 10;
    result *= d;
  }
  return result;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
