function reverse(a, b) {
  const x = a * b;
  const y = Number(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  return x === y ? y : false;
}

export default function(obj) {
  const { maxFactor, minFactor } = obj;
  const arr = [];
  const arr2 = [];
  for (let i = minFactor || 1; i <= maxFactor; i++) {
    for (let j = minFactor || 1; j <= maxFactor; j++) {
      const isReverse = reverse(i, j);
      if (isReverse) {
        arr.push(isReverse);
        arr2.push([i, j]);
      }
    }
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const result = {
    smallest: {
      value: min,
      factors: arr2[arr.indexOf(min)]
    },
    largest: {
      value: max,
      factors: arr2[arr.indexOf(max)]
    }
  };

  return result;
}
