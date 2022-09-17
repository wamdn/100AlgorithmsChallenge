function alternatingSums(a: number[]): number[] {
  const result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if ((i + 1) % 2 !== 0) result[0] += a[i];
    else result[1] += a[i];
  }

  return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
