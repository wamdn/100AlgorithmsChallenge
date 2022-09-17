function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
  let faildAttempts = 0;
  for (const attempt of attempts) {
    if (faildAttempts === 10) return true;

    if (attempt === passcode) {
      faildAttempts = 0;
      continue;
    }

    faildAttempts++;
  }
  return false;
}

console.log(
  incorrectPasscodeAttempts('1111', [
    '1111',
    '4444',
    '9999',
    '3333',
    '8888',
    '2222',
    '7777',
    '0000',
    '6666',
    '7285',
    '5555',
    '1111'
  ])
);
