function evenDigitsOnly(n: number): boolean {
  while (n !== 0) {
    const digits = n % 10;
    n = (n - digits) / 10;
    if (digits % 2 !== 0) return false;
  }
  return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
