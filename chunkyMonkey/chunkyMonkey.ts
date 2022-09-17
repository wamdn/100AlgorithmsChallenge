function chunkyMonkey(arr: any[], size: number): any[][] {
  if (arr.length <= size) return [arr];

  const result = [[], []];
  let curIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (i === size) curIndex++;

    result[curIndex].push(item);
  }

  return result;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
