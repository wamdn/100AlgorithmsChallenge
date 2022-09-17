function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const toReview: number[] = [];
  for (let i = 0; i < ratings.length; i++) {
    const r = ratings[i];
    if (average(r) < threshold) toReview.push(i);
  }
  return toReview;
}

function average(nbrs: number[]): number {
  return nbrs.reduce((acc, cur) => acc + cur, 0) / nbrs.length;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
