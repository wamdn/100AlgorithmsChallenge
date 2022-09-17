function compareIntegers(a: string, b: string): string {
  if (a < b) return 'less';
  else if (a > b) return 'greater';
  else return 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
