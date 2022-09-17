function sumOddFibonacciNums(num: number): number {
  const fibonacci: { prev: number; last: number } = {
    prev: 0,
    last: 1
  };
  let sum: number = 0;
  while (fibonacci.last <= num) {
    if (fibonacci.last % 2 !== 0) sum += fibonacci.last;

    const temp = fibonacci.last;
    fibonacci.last = fibonacci.prev + fibonacci.last;
    fibonacci.prev = temp;
  }
  return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
