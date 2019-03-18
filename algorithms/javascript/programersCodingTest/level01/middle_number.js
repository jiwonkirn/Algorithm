// first
function solution(s) {
  const sl = s.length,
    mid = Math.floor(sl / 2);
  return sl % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

// second
function solution(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
