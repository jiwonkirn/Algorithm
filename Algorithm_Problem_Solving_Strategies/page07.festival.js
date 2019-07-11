function festival(l, arr) {
  let min = arr.slice(0, l).reduce((acc, item) => acc + item, 0) / l;
  for (let left = 0; left < arr.length - l; left++) {
    let right = left + l - 1;
    while (right < arr.length) {
      let acc = 0;
      for (let i = left; i <= right; i++) {
        acc += arr[i];
      }
      acc /= right - left + 1;
      if (min > acc) {
        min = acc;
      }
      right++;
    }
  }
  return min;
}

console.log(festival(3, [1, 2, 3, 1, 2, 3])); // 1.75
console.log(festival(2, [1, 2, 3, 1, 2, 3])); // 1.5
