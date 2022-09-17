function findEmailDomain(address: string): string {
  const domain = address.match(/@[\w\-]+\.[a-zA-z0-9\-]+$/);
  return domain[0];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
