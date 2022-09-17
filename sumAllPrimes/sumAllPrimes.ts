function sumAllPrimes(num: number): number {
  const primes: number[] = [];
  let sum: number = 0;
  for (let i = 2; i <= num; i++) {
    // is prime?
    const sqrt = Math.sqrt(i);
    let isPrime = true;
    for (let j = 0; primes[j] && primes[j] <= sqrt; j++) {
      if (i % primes[j] === 0) isPrime = false;
    }
    if (isPrime) {
      sum += i;
      primes.push(i);
    }
  }
  return sum;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
