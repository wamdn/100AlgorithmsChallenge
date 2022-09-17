type StatusSize = {
  smallest: number;
  largest: number;
};

function makeArrayConsecutive2(statues: number[]): number {
  const statusSize: StatusSize = {
    smallest: statues[0],
    largest: statues[0]
  };

  for (const s of statues) {
    if (s < statusSize.smallest) {
      statusSize.smallest = s;
    } else if (s > statusSize.largest) {
      statusSize.largest = s;
    }
  }

  return statusSize.largest - (statusSize.smallest - 1) - statues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
