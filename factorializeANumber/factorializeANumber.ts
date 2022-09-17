function factorializeANumber(num: number): number {
  if (num === 1) return 1;
  return factorializeANumber(num - 1) * num;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
