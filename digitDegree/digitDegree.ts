function digitDegree(n: number): number {
  if (n < 10) return 0;

  let passCount = 0;
  let prevResult = n;

  while (prevResult > 9) {
    prevResult = addDigits(prevResult);
    passCount++;
    if (prevResult < 10) return passCount;
  }

  return passCount;
}

function addDigits(n: number): number {
  let digits: number = n;
  let sum = 0;
  while (digits !== 0) {
    const d = digits % 10;
    digits -= d;
    digits /= 10;
    sum += d;
  }
  return sum;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
