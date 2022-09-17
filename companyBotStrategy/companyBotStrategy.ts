function companyBotStrategy(trainingData: number[][]): number {
  let totalTime = 0;
  let correctAnswer = 0;

  for (const record of trainingData) {
    const time = record[0];
    const isCorrect = record[1] === 1;
    if (isCorrect) {
      totalTime += time;
      correctAnswer++;
    }
  }

  if (correctAnswer === 0) return 0;

  return totalTime / correctAnswer;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1]
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1]
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1]
  ])
);
