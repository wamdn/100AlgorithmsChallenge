function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
  let digitsCount = getDigitsCount(current);

  while (true) {
    if (current === Math.pow(10, digitsCount)) digitsCount++;
    if (numberOfDigits - digitsCount < 0) break;

    current++;
    numberOfDigits -= digitsCount;
  }

  return current - 1;
}

function getDigitsCount(n: number): number {
  if (Math.sign(n) === -1) throw new Error('Argument Out Range Exception: n need to be a positif value');

  let count = 0;
  do {
    count++;
    n = Math.floor(n / 10);
  } while (n > 0);
  return count;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
