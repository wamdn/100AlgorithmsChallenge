type PrevState = {
  prevA: number;
  prevB: number;
};

function switchLights(a: number[]): number[] {
  const b: number[] = [];

  const s: PrevState = {
    prevA: 0,
    prevB: 0
  };

  for (let i = a.length - 1; i >= 0; i--) {
    let curB = 0;
    if (s.prevA !== s.prevB) curB = 1;

    s.prevA = a[i];
    s.prevB = curB;

    b[i] = curB;
  }

  // --- Naive solution ---

  // for (let i = 0; i < a.length; i++) {
  //   const c = a[i];
  //   candlesState[i] = 0;
  //   if (c === 0) continue;

  //   for (let j = 0; j < i; j++) {
  //     candlesState[j] = candlesState[j] === 1 ? 0 : 1;
  //   }
  // }

  return b;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));

// 1, 1
// A ,0

// A = 1

// 1, 1
// A ,1

// A = 0

// 1, 0
// A ,0

// A = 0

// 1, 0
// A ,1

// A = 1

// 0, 1
// A ,0

// A = 1

// 0, 1
// A ,1

// A = 0

// 0, 0
// A ,1

// A = 1

// 0, 0
// A ,0

// A = 0
