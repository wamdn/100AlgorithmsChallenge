function arrayConversion(inputArray: number[]): number {
  let prevArray = [...inputArray];
  let iterationCount = 1;

  while (prevArray.length > 1) {
    const isEvenIteration = iterationCount % 2 === 0;

    if (isEvenIteration) {
      prevArray = operateOnPairs(prevArray, (prev: number, cur: number): number => prev * cur);
    } else {
      prevArray = operateOnPairs(prevArray, (prev: number, cur: number): number => prev + cur);
    }

    iterationCount++;
  }

  return prevArray[0];
}

function operateOnPairs(arr: number[], cb) {
  const tempArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    const prev = arr[i - 1];
    const cur = arr[i];
    tempArr.push(cb(prev, cur));
  }
  return tempArr;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
