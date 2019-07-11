// 배열 메서드 (96 ms, 38.4 MB)
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let currentString = [];
  for (let i = 0; i < s.length; i++) {
    const index = currentString.indexOf(s[i]);
    if (index === -1) {
      currentString.push(s[i]);
    } else {
      currentString.splice(0, index + 1);
      currentString.push(s[i]);
    }
    if (max < currentString.length) {
      max = currentString.length;
    }
  }
  return max;
};

// 다른 사람 (84 ms)
var lengthOfLongestSubstring = function(s) {
  // 문자열이 없으면 0을 반환해라.
  if (s.length < 1) return 0;
  // 최대 길이는 기본값 1, 시작은 0부터 시작한다.
  var max = 1;
  var start = 0;
  // 1번 인덱스부터 시작해서 모든 문자열을 돈다.
  for (var cur = start + 1; cur < s.length; cur++) {
    // 만약 문자열이 시작 문자열과 같은데,
    if (s[cur] == s[start]) {
      // 현재 - 시작 인덱스가 최대길이보다 크면 최대길이는 현재 - 시작
      if (cur - start > max) max = cur - start;
      // 시작 인덱스 증가
      start++;
      continue;
    }
    //
    for (var inter = start + 1; inter < cur; inter++) {
      if (s[inter] == s[cur]) {
        start = inter + 1;
        break;
      }
    }
    if (inter == cur) {
      if (cur - start + 1 > max) max = cur - start + 1;
    }
  }
  return max;
};

// 이중 루프 (520 ms, 67.2 MB)
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for (let i = 0; i < s.length - max; i++) {
    let length = 0;
    const obj = {};
    for (let j = i; j < s.length; j++) {
      if (obj[s[j]]) {
        break;
      }
      obj[s[j]] = 1;
      length++;
    }
    if (max < length) {
      max = length;
    }
  }
  return max;
};

// 이중 루프 (564 ms, 68.5 MB)
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let length = 0;
    const obj = {};
    for (let j = i; j < s.length; j++) {
      if (obj[s[j]]) {
        break;
      }
      obj[s[j]] = 1;
      length++;
    }
    if (max < length) {
      max = length;
    }
    if (max >= s.length - i) {
      break;
    }
  }
  return max;
};
