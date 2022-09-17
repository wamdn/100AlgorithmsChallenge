function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
  const len = cost_per_mile.length;
  const estimates: number[] = [];

  for (let i = 0; i < len; i++) {
    const result = Math.floor((cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance) * 10) / 10;
    estimates.push(result);
  }

  return estimates;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
