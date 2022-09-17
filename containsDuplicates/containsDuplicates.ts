function containsDuplicates(a: number[]): boolean {
  const freqCount = {};

  for (let i = 0; i < a.length; i++) {
    const n = a[i];

    if (freqCount[n]) return true;

    freqCount[n] = 1;
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
