function electionsWinners(votes: number[], k: number): number {
  const max = Math.max(...votes);
  return votes.filter(v => v + k > max).length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
