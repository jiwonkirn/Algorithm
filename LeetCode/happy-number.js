var isHappy = function(n) {
  const set = new Set();
  let sum = n;
  while (true) {
    const str = sum.toString().split("");
    sum = str.reduce((a, c) => a + Number(c) ** 2, 0);
    if (sum === 1) return true;
    if (set.has(sum)) return false;
    set.add(sum);
  }
};
