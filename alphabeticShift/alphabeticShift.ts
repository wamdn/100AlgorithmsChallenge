function alphabeticShift(inputString: string): string {
  let result = '';
  for (const char of inputString) {
    switch (char) {
      case 'Z':
        result += 'A';
        continue;
      case 'z':
        result += 'a';
        continue;
    }

    const charUnicode = char.charCodeAt(0);
    const A = 65,
      Z = 90,
      a = 97,
      z = 122;

    if (charUnicode < A || charUnicode > z || (charUnicode > Z && charUnicode < a)) {
      result += char;
      continue;
    }

    result += String.fromCharCode(charUnicode + 1);
  }
  return result;
}

console.log(alphabeticShift('crazy'));
