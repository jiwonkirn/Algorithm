// mine
// MEDIUM
// 난이도가 쉬웠다.
// . 을 기준으로 각 버저닝 섹션을 숫자화해서 비교.
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const len = Math.max(v1.length, v2.length);
  for (var i = 0; i < len; i++) {
    const n1 = v1[i] ? Number(v1[i]) : 0;
    const n2 = v2[i] ? Number(v2[i]) : 0;
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
  }
  return 0;
};

// mine2
// 노가다로 풀어봤다.
var compareVersion = function(version1, version2) {
  version1 += '.';
  version2 += '.';
  let v1 = 0;
  let v2 = 0;
  while (v1 < version1.length && v2 < version2.length) {
    let w1 = '';
    let w2 = '';
    while (version1[v1] !== '.') {
      w1 += version1[v1++];
    }
    while (version2[v2] !== '.') {
      w2 += version2[v2++];
    }
    w1 = Number(w1);
    w2 = Number(w2);
    if (w1 > w2) return 1;
    if (w1 < w2) return -1;
    v1++;
    v2++;
  }
  while (v1 < version1.length) {
    let w1 = '';
    while (version1[v1] !== '.') {
      w1 += version1[v1++];
    }
    if (w1 > 0) return 1;
    if (w1 < 0) return -1;
    v1++;
  }
  while (v2 < version2.length) {
    let w2 = '';
    while (version2[v2] !== '.') {
      w2 += version2[v2++];
    }
    if (w2 > 0) return -1;
    if (w2 < 0) return 1;
    v2++;
  }
  return 0;
};
