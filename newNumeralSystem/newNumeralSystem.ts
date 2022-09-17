function newNumeralSystem(number: string): string[] {
  const OFFSET = 65;
  const n: number = number.charCodeAt(0) - OFFSET;
  const end = Math.floor(n / 2);
  const result: string[] = [];
  for (let i = 0; i <= end; i++) {
    const a: string = String.fromCharCode(i + OFFSET);
    const b: string = String.fromCharCode(n - i + OFFSET);
    result.push(`${a} + ${b}`);
  }
  return result;
}

console.log(newNumeralSystem('G'));
