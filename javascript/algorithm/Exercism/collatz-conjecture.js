// my solution
export const steps = int => {
  if (int <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let count = 0;
  while (int > 1) {
    int % 2 === 0 ? (int /= 2) : (int = int * 3 + 1);
    count++;
  }
  return count;
};

// others
export const steps = (n, count = 0) => {
  if (n <= 0) throw "Only positive numbers are allowed";
  if (n === 1) return count;
  return steps(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
};