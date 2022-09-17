function lateRide(n: number): number {
  const h = Math.floor(n / 60);
  const m = n % 60;
  return sumDigits(h) + sumDigits(m);
}

function sumDigits(n: number): number {
  if (n < 9) return n;
  let sum = 0;
  while (n > 0) {
    const d = n % 10;
    sum += d;
    n = (n - d) / 10;
  }
  return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
