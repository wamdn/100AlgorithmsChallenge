function isTandemRepeat(inputString: string): boolean {
  const substring = inputString.substring(0, Math.floor(inputString.length / 2));
  return substring.repeat(2) === inputString;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
