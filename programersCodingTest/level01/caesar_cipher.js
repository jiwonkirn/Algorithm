function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  return s
    .split("")
    .map(item => {
      if (lower.includes(item)) {
        return lower[(lower.indexOf(item) + n) % 26];
      } else if (upper.includes(item)) {
        return upper[(upper.indexOf(item) + n) % 26];
      }
      return item;
    })
    .join("");
}
