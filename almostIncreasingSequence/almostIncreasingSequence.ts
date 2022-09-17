function almostIncreasingSequence(sequence: number[]): boolean {
  // loop on sequence
  // get cur value and next value
  // if next value is lower then cur value
  // remove next value
  // check if array is en increasing sequence
  // remove cur value
  // check if array is en increasing sequence
  // else continue

  for (let i = 0; i < sequence.length; i++) {
    const cur = sequence[i];
    const next = sequence[i + 1];

    if (next < cur) {
      if (isIncSeq(sequence, i + 1) || isIncSeq(sequence, i)) return true;
    }
  }

  return false;
}

function isIncSeq(sequence: number[], indexToIgnore: number = -1): boolean {
  let lastValue = sequence[0];
  return sequence.every((cur, idx) => {
    if (idx === 0 || idx === indexToIgnore) return true;

    const res = lastValue < cur;
    lastValue = cur;
    return res;
  });
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

// console.log(isIncreasingSequence([1, 2, 3]));
// console.log(isIncreasingSequence([1, 4, 3]));
