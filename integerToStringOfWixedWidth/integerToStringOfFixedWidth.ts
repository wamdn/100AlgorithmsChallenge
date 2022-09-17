function integerToStringOfFixedWidth(number: number, width: number): string {
  let digits = number;
  let result = 0;
  for (let i = 0; i < width; i++) {
    const d = digits % 10;
    digits = (digits - d) / 10;
    result += d * Math.pow(10, i);
  }
  const resultStr = result.toString();
  if (width > resultStr.length) return '0'.repeat(width - resultStr.length) + resultStr;

  return resultStr;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
