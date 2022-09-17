function properNounCorrection(noun: string): string {
  if (/^[A-Z][a-z]+/.test(noun)) return noun;
  return noun[0].toUpperCase() + noun.substring(1).toLowerCase();
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
