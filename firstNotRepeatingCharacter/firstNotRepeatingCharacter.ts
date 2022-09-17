/// <reference lib="es2017" />

class CharInfo {
  constructor(public count: number, public index: number) {}
}

function firstNotRepeatingCharacter(s: string): string {
  const freqCount = new Map<string, CharInfo>();
  let minIdxUnique: CharInfo;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charInfo = freqCount.get(char);
    if (charInfo) {
      charInfo.count++;
      charInfo.index = i;
      continue;
    }
    freqCount.set(char, new CharInfo(1, i));
  }

  freqCount.forEach((charInfo: CharInfo): void => {
    if (charInfo.count !== 1) return;
    if (!minIdxUnique || minIdxUnique.index > charInfo.index) minIdxUnique = charInfo;
  });

  return minIdxUnique ? s[minIdxUnique.index] : '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
