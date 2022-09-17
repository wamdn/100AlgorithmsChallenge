function houseOfCats(legs: number): number[] {
  const possiblePeople = [];
  for (let i = 2; i <= legs; i += 2) {
    if ((i - legs) % 4 === 0) possiblePeople.push(i / 2);
  }
  return possiblePeople;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
