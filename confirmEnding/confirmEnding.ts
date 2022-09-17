function confirmEnding(str: string, target: string) {
  const start = str.length - target.length;
  const end = str.length;
  return str.substring(start, end) === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
