function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((x, y) => y - x)
      .join("")
  );
}
