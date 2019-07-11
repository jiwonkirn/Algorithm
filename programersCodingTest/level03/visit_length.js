// 방문 길이

const direction = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0]
};

const move = (char, cur) => {
  const [x, y] = direction[char];
  const next = [cur[0] + x, cur[1] + y];
  if (Math.abs(next[0]) > 5 || Math.abs(next[1]) > 5) {
    return false;
  }
  return next;
};

const solution = dir => {
  const result = new Set();
  let cur = [0, 0];
  for (const item of dir) {
    const next = move(item, cur);
    if (!next) {
      continue;
    }
    const rightStr = next.join("");
    const leftStr = cur.join("");
    if (!result.has(rightStr + leftStr)) {
      result.add(leftStr + rightStr);
    }
    cur = next;
  }
  return result.size;
};
