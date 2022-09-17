/// <reference lib="es2017.object" />

function commonCharacterCount(s1: string, s2: string): number {
  const s1FreqCount = freqCount(s1);
  const s2FreqCount = freqCount(s2);
  let commonCharCount = 0;

  for (const [key] of Object.entries(s1FreqCount)) {
    if (s1FreqCount[key] && s2FreqCount[key])
      commonCharCount += s1FreqCount[key] > s2FreqCount[key] ? s2FreqCount[key] : s1FreqCount[key];
  }

  return commonCharCount;
}

function freqCount(s: string) {
  const strFreqCount = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!strFreqCount[char]) {
      strFreqCount[char] = 1;
      continue;
    }

    strFreqCount[char]++;
  }
  return strFreqCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
