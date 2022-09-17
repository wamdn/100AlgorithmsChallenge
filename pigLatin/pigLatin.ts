function pigLatin(str: string): string {
  if (/^[aeiouy]/.test(str)) return str + 'way';

  const [a] = str.match(/^[^aeiouy]+/);
  const b = str.substring(a.length);
  return b + a + 'ay';
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));
