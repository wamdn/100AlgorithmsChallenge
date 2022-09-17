function reflectString(inputString: string): string {
  const offset = 97;
  const charArray: string[] = [];
  for (let i = 0; i < inputString.length; i++) {
    const charCode = 122 - (inputString.charCodeAt(i) - offset);
    charArray.push(String.fromCharCode(charCode));
  }
  return charArray.join('');
}

console.log(reflectString('name'));
console.log(reflectString('abcdefghijklmnopqrstuvwxyz'));
