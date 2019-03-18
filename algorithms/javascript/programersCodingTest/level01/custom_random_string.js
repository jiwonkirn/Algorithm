function solution(strings, n) {
  return strings.sort((x, y) =>
    x[n] !== y[n] ? x[n].localeCompare(y[n]) : x.localeCompare(y)
  );
}
