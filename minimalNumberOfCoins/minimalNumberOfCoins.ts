function minimalNumberOfCoins(coins: number[], price: number): number {
  let coinCount = 0;
  let rest = price;
  for (let i = coins.length - 1; i >= 0; i--) {
    const c = coins[i];
    if (c > rest) continue;

    const temp = rest % c;
    coinCount += (rest - temp) / c;
    rest = temp;
  }
  return coinCount;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
