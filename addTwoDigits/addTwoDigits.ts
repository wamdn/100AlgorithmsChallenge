function addTwoDigits(n: number | string): number {
  let digits = n;
  let digitsString: string;

  if (typeof n === 'number' && Number.isInteger(n)) digitsString = digits.toString(10);
  else if (typeof n === 'string' && /\d/.test(n)) digitsString = n;
  else throw new Error('Invalid Argument: n need to be a integer or a integer string');

  let sum = 0;
  for (const digit of digitsString) sum += parseInt(digit, 10);

  return sum;
}

console.log(addTwoDigits(29));
