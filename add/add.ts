function add(param1: number, param2: number): number | never {
  const invalidArguments = isNaN(param1) || isNaN(param1) || typeof param1 != 'number' || typeof param2 != 'number';

  if (invalidArguments) throw new Error('Invalid Argument Execption: arguments need to be a numbers');

  return param1 + param2;
}

function add2(...param1: number[]): number | never {
  return param1.reduce(add, 0);
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
