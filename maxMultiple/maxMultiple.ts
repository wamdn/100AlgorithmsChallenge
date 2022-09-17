function maxMultiple(divisor: number, bound: number): number {
  return bound - (bound % divisor);
}

console.log(maxMultiple(3, 10));
