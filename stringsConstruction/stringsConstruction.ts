function stringsConstruction(a: string, b: string): number {
  const freqCount = new Map<string, number>();
  let stringCount: number = null;
  for (const c of b) {
    freqCount.set(c, freqCount.get(c) + 1 || 1);
  }
  for (const c of a) {
    const count = freqCount.get(c) || 0;
    if (count < stringCount || stringCount === null) stringCount = count;
  }
  return stringCount;
}

console.log(stringsConstruction('abc', 'abccba'));
