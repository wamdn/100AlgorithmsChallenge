function adjacentElementsProduct(inputArray: number[]): number {
  let max: number;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const cur = inputArray[i];
    const next = inputArray[i + 1];
    const res = cur * next;

    if (res > max || max === undefined) max = res;
  }

  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
