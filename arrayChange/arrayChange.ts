function arrayChange(inputArray: number[]): number {
  let prevInput = inputArray[0];
  let numberOfMove = 0;

  for (let i = 1; i < inputArray.length; i++) {
    let input = inputArray[i];

    if (prevInput >= input) {
      numberOfMove += prevInput - input + 1;
      input = prevInput + 1;
    }

    prevInput = input;
  }

  return numberOfMove;
}

console.log(arrayChange([1, 1, 1]));
