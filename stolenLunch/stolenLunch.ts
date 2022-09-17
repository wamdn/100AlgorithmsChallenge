function stolenLunch(note: string): string {
  const charArray: string[] = [];
  const a = 97,
    j = 106;
  const zero = 48,
    nine = zero + 9;

  for (let c of note) {
    const code = c.charCodeAt(0);

    // is alphabetic
    if (code >= a && code <= j) {
      c = String.fromCharCode(code - 49);
    }

    // is numeric
    if (code >= zero && code <= nine) {
      c = String.fromCharCode(code + 49);
    }

    charArray.push(c);
  }

  return charArray.join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
