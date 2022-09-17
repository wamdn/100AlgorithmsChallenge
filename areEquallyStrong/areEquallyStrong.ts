function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  // case 1
  if (yourLeft === friendsLeft && yourRight === friendsRight) return true;
  // case 2
  if (yourRight === friendsLeft && yourLeft === friendsRight) return true;

  return false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
