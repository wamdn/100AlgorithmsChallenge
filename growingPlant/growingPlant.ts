function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  return Math.ceil(desiredHeight / (upSpeed - downSpeed));
}

console.log(growingPlant(100, 10, 910));
