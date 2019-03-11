function solution(n, words) {
  const stack = [];
  for (let i = 1; i < words.length; i++) {
    stack.push(words[i - 1]);
    const last = words[i - 1].match(/\w$/)[0];
    const first = words[i].match(/^\w/)[0];
    if (last !== first || stack.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }
  return [0, 0];
}
