function boxBlur(image: number[][]): number[][] {
  let result: number;
  let pixelSum = 0;

  for (const imageRow of image) {
    for (const pixelValue of imageRow) {
      pixelSum += pixelValue;
    }
  }

  result = Math.floor(pixelSum / 9);

  return [[result]];
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
  ])
);
