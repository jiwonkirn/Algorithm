// mine
// 유효하지 않은 숫자가 들어오게 될 차례이면 다음 단위로 이동시킨다.
// 유효한 숫자임에도 다른 경우의 수를 구하기 위해
// 다음 단위로 이동시킨 뒤 함수를 하나 더 실행시킨다.
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 16) return [];
  const len = s.length;
  const res = [];
  function helper(cur, index, turn) {
    for (let i = index; i < s.length; i++) {
      if (turn > 3) return;
      const next = cur[turn] + s[i];
      if (cur[turn] === '0' || Number(next) > 255) {
        turn++;
        cur[turn] += s[i];
      } else {
        if (cur[turn] && (3 - turn) * 3 >= len - i - 1) {
          helper([...cur], i, turn + 1);
        }
        cur[turn] += s[i];
      }
    }
    cur = cur.join('.');
    if (cur.length - 3 === len && turn === 3) {
      res.push(cur);
    }
  }
  helper(['', '', '', ''], 0, 0);
  return res;
};

// other's
// 배치할 수 있는 모든 경우의 수를 구한다.
function restoreIpAddresses(s) {
  const res = [];
  dfs([], 0);
  return res;

  function dfs(prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }

    if (prefix.length === 4 || idx === s.length) {
      return;
    }

    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === '0') return;

      const num = parseInt(s.slice(idx, r + 1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r + 1);
      prefix.pop();
    }
  }
}
