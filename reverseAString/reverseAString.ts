function reverseAString(str: string): string {
  return Array.from(str).reverse().join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));
