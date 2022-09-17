function characterParity(symbol: string): string {
  const number = parseInt(symbol, 10);

  if (isNaN(number)) return 'not a digit';

  if (number % 2 === 0) return 'even';
  else return 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
