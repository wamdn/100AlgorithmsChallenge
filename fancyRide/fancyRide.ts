function fancyRide(l: number, fares: number[]): string {
  const credits = 20;
  const ops = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];

  for (let i = 0; i < fares.length; i++) {
    const f = fares[i];
    const cost = f * l;
    if (cost > credits) return ops[i - 1];
  }

  return ops[ops.length - 1];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
