function alphabetSubsequence(s: string): boolean {
  let prevCharCode: Number = 0;
  const A = 65,
    Z = 90,
    a = 97,
    z = 122;

  for (const char of s) {
    const charCode = char.charCodeAt(0);

    // out of the alphabet range
    if (charCode < A || charCode > z || (charCode > Z && charCode < a)) return false;

    // not a subsequence
    if (charCode <= prevCharCode) return false;

    prevCharCode = charCode;
  }

  return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
