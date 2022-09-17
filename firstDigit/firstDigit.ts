function firstDigit(inputString: string): string {
  const numbers = inputString.match(/\d/g);
  return numbers[numbers.length - 1];
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
