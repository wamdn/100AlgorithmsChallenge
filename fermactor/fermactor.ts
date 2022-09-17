function fermactor(n: number): number[] {
  const c = Math.ceil(Math.sqrt(n));
  const d = Math.sqrt(Math.pow(c, 2) - n);
  return [c, d];
}

console.log(fermactor(15));
