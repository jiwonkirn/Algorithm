function solution(par, com) {
  const a = par.sort();
  const b = com.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i];
    }
  }
}
