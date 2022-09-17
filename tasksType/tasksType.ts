function tasksTypes(deadlines: number[], day: number): number[] {
  const today = 0;
  const upcoming = 1;
  const later = 2;
  const result: number[] = [0, 0, 0];

  for (const d of deadlines) {
    if (d <= day) {
      result[today]++;
    } else if (d > day && d <= day + 7) {
      result[upcoming]++;
    } else {
      result[later]++;
    }
  }

  return result;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
