function areSimilar(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;

  // if inequalty is more than 2, return false
  let inequality = 0;
  for (let i = 0; i < a.length; i++) {
    const isEqual = a[i] === b[i];
    if (!isEqual) inequality++;

    if (inequality > 2) return false;
  }

  return true;
}

const array1 = {
  1: [{ pos: 0, eq: false }],
  2: [{ pos: 1, eq: false }],
  3: [{ pos: 2, eq: true }]
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
