function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  const inputArrayCopy = [...inputArray];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) inputArrayCopy[i] = substitutionElem;
  }
  return inputArrayCopy;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
