function proCategorization(pros: string[], preferences: string[][]): string[][][] {
  const prefHash = new Map<string, string[]>();
  const result: string[][][] = [];
  for (let i = 0; i < pros.length; i++) {
    const categories = preferences[i];
    for (const c of categories) {
      if (!prefHash.has(c)) {
        prefHash.set(c, [pros[i]]);
        continue;
      }
      prefHash.get(c).push(pros[i]);
    }
  }
  prefHash.forEach((v, k) => {
    result.push([[k], v]);
  });
  return result;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning']
    ]
  )
);
