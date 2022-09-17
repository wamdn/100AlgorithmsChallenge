function arrayPreviousLess(items: number[]): number[] {
  const resultArray: number[] = [-1];
  let minPrevValue = items[0];

  for (let i = 1; i < items.length; i++) {
    const cur = items[i];

    if (minPrevValue > cur) {
      resultArray[i] = -1;
      minPrevValue = cur;
      continue;
    }

    for (let j = i - 1; j >= 0; j--) {
      const prev = items[j];
      if (prev < cur) {
        resultArray[i] = prev;
        break;
      }
    }
  }

  return resultArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
