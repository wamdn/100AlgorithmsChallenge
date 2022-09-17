function differentSymbolsNaive(s: string): number {
  const freqCount = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!freqCount.has(char)) freqCount.set(char, true);
  }
  return freqCount.size;
}

console.log(differentSymbolsNaive('cabca'));
