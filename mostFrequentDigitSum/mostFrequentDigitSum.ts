function mostFrequentDigitSum(n: number): number {
  const freqCount = new Map<number, number>();
  const sequence = getSequence(n);
  const mostFrequent = {
    value: 0,
    count: 0
  };
  for (const x of sequence) {
    const n = digitsSum(x);
    if (!freqCount.has(n)) {
      freqCount.set(n, 1);
      continue;
    }
    freqCount.set(n, freqCount.get(n) + 1);
  }
  freqCount.forEach((c, v) => {
    if (c > mostFrequent.count) {
      mostFrequent.count = c;
      mostFrequent.value = v;
    }
  });
  return mostFrequent.value;
}

function digitsSum(n: number): number {
  if (n < 10) return n;
  const d = n % 10;
  return d + digitsSum((n - d) / 10);
}

function getSequence(n: number): number[] {
  const seq: number[] = [n];
  const helperFunc = (): void => {
    const x = seq[seq.length - 1];
    const v = x - digitsSum(x);
    seq.push(v);

    if (v === 0) return;
    helperFunc();
  };
  helperFunc();
  return seq;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
