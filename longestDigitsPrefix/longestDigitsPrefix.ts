function longestDigitsPrefix(inputString: string): string {
  const match = inputString.match(/\d+/g);
  let longestMatch = '';
  for (const s of match) {
    if (s.length > longestMatch.length) longestMatch = s;
  }
  return longestMatch;
}

console.log(longestDigitsPrefix('123aa1'));
