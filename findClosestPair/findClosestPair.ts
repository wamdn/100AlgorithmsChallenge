function findClosestPair(numbers: number[], sum: number): number {
  /* 
  // Naive approach
  let diff: number;
  for (let i = 0; i < numbers.length - 1; i++) {
    const a = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const b = numbers[j];
      if (a + b === sum) diff = j - i;
    }
  }
  return diff || -1;
  */

  // Scalable approach
  let minDiff: number;
  const hashTableNbrs = getHashTable(numbers);
  for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i];
    const nbrToAdd = sum - cur;
    const arrOfIdx = hashTableNbrs.get(nbrToAdd);
    if (!arrOfIdx) continue;
    for (const j of arrOfIdx) {
      const absDiff = Math.abs(j - i);
      if (!minDiff || absDiff < minDiff) minDiff = absDiff;
    }
  }
  return minDiff || -1;
}

function getHashTable(arr: number[]): Map<number, number[]> {
  const hashTable = new Map<number, number[]>();
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (hashTable.has(n)) {
      hashTable.get(n).push(i);
    } else {
      hashTable.set(n, [i]);
    }
  }
  return hashTable;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
