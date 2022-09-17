function absoluteValuesSumMinimization(a: number[]): number | never {
  if (a.length < 2) throw new Error('Argument Out Range Exception: array need to have at least 2 elements');

  const maxIndex = a.length - 1;
  const midIndex = Math.floor(maxIndex / 2);

  return a[midIndex];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
