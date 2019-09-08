// MEDIUM

// mine
// 해쉬 테이블로 봤는지 확인하는 방식으로 풀음
var findRepeatedDnaSequences = function(s) {
  const obj = {};
  const res = [];
  for (var i = 0; i <= s.length - 10; i++) {
    const str = s.slice(i, i + 10);
    if (!obj[str]) obj[str] = 1;
    else if (obj[str] > 1) obj[str]++;
    else {
      res.push(str);
      obj[str]++;
    }
  }
  return res;
};

// other's
// set 자료구조 2개 이용
// 자바스크립트 내장 딕셔너리를 이용하는것 보다 set자료구조를 이용하는 것이 더 빠르게 나왔다.
var findRepeatedDnaSequences = function(s) {
  const dna = new Set();
  const seen = new Set();
  for (var i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10);
    if (!dna.has(str)) dna.add(str);
    else if (!seen.has(str)) {
      seen.add(str);
    }
  }
  return [...seen];
};
