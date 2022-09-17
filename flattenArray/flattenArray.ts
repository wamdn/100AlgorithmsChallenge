function flattenArray(arr: any[]): any[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
      continue;
    }
    result.push(item);
  }
  return result;
}

console.log(flattenArray([[['a']], [['b']]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
