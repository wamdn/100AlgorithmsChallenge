function missingLetters(str: string): string {
  const start: number = str.charCodeAt(0);
  const end: number = str.charCodeAt(str.length - 1);
  for (let i = 0, j = start; i < str.length; i++, j++) {
    const char: string = String.fromCharCode(j);
    if (char !== str[i]) return char;
  }
}
console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
