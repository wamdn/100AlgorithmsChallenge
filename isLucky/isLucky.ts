function isLucky(n: number): boolean {
  const digits: number[] = [];
  while (n > 0) {
    const d = n % 10;
    n = (n - d) / 10;
    digits.push(d);
  }
  if (digits.length % 2 !== 0) return false;
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];
    const isFirstHalf = i < digits.length / 2;
    if (isFirstHalf) {
      firstHalf += d;
    } else {
      secondHalf += d;
    }
  }
  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
