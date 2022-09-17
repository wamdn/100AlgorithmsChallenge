function allLongestStrings(inputArray: string[]): string[] {
  // loop on inputArray
  // if max lenght change reset resultArray
  // else push to value to resultArray
  let maxLen = 0;
  let resultArray: string[] = [];

  for (const value of inputArray) {
    const curLen = value.length;

    if (curLen > maxLen) {
      maxLen = curLen;
      resultArray = [];
    }

    if (curLen === maxLen) resultArray.push(value);
  }

  return resultArray;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
