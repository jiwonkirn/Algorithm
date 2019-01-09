// Mine
export const classify = int => {
  if (int <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const arr = [];
  for (let i = 1; i <= int / 2; i++) {
    if (int % i === 0) {
      arr.push(i);
    }
  }

  const sum = arr.reduce((a, i) => a + i, 0);
  return sum === int ? "perfect" : sum > int ? "abundant" : "deficient";
};
