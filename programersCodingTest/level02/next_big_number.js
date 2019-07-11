function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

function solution(n) {
  const binary = n
    .toString(2)
    .split("")
    .filter(i => i === "1").length;
  let result = n + 1;
  while (true) {
    const a = result
      .toString(2)
      .split("")
      .filter(i => i === "1").length;
    if (binary === a) return result;
    result++;
  }
}
