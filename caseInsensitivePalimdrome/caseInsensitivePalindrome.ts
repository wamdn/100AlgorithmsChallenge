function isCaseInsensitivePalindrome(inputString: string): boolean {
  if (inputString.length < 2) throw new Error('Invalid Argument Exception: argument nedd to be at least 2 character long');

  const inputLowercase = inputString.toLocaleLowerCase();
  const lastIndex = inputLowercase.length - 1;
  const midLen = Math.floor(inputLowercase.length / 2);

  for (let i = 0; i < midLen; i++) {
    const left = inputLowercase[i];
    const right = inputLowercase[lastIndex - i];

    if (left !== right) return false;
  }

  return true;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
