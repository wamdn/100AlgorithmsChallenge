function avoidObstacles(inputArray: number[]): number {
  if (inputArray.length === 0) return 1;

  const inputArrayCopy = [...inputArray];
  inputArrayCopy.sort((a, b) => a - b);

  let minLengthJump: number;
  let tryJump = 2;
  while (!minLengthJump) {
    const jumpSucced = inputArrayCopy.every(obstacle => obstacle % tryJump !== 0);
    if (jumpSucced) minLengthJump = tryJump;

    tryJump++;
  }

  return minLengthJump;
}

// ..i.iii.i..
console.log(avoidObstacles([5, 3, 6, 7, 9]));
