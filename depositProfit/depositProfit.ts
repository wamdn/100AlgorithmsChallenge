function depositProfit(deposit: number, rate: number, threshold: number): number {
  let result = deposit;
  let year = 0;
  while (result < threshold) {
    result += (result / 100) * 20;
    year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));
