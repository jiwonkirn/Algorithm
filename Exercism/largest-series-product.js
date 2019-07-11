export const largestProduct = (str, limit) => {
  if (str.match(/[a-zA-Z]/g) || limit < 0) throw new Error("Invalid input.");
  if (str.length < limit) throw new Error("Slice size is too big.");
  if (limit === 0) return 1;
  let num = 0;
  for (let i = 0; i <= str.length - limit; i++) {
    const result = str
      .slice(i, i + limit)
      .split("")
      .reduce((a, i) => a * Number(i), 1);
    if (num < result) num = result;
  }
  return num;
};
