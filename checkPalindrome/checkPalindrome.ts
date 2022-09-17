function checkPalindrome(inputString: string): boolean {
  if (inputString.length === 1) return true;

  const midlen = Math.floor(inputString.length / 2);
  const lastIndex = inputString.length - 1;

  for (let i = 0; i < midlen; i++) {
    const left = inputString[i];
    const right = inputString[lastIndex - i];

    if (left !== right) return false;
  }

  return true;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
