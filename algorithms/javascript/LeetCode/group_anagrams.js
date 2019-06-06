// mine (128ms ~ 168ms)
// 정렬로 해싱을 해서 키를 구하는 방법이어서 시간 복잡도가 상승
var groupAnagrams = function(strs) {
  const obj = {};
  for(let i = 0; i < strs.length; i++) {
      const hashed = [...strs[i]].sort().join();
      if (obj[hashed]) {
          obj[hashed].push(strs[i])
      } else {
          obj[hashed] = [strs[i]]
      }
  }
  return Object.values(obj);
};

// other's
// Object 타입의 mutable 속성을 이용함
// 문자의 코드를 4제곱해서 다른 조합에 같은 키가 나올 확률을 엄청 낮춤
// 내가 한 것과 비교했을 때 키값을 구하는 부분이 성는차이가 남.
var groupAnagrams = function(strs) {
  const obj = {};
  const result = [];
  for(let i = 0; i < strs.length; i++) {
      let acc = 0;
      for (let j = 0; j < strs[i].length; j++) {
          acc += strs[i][j].charCodeAt() ** 4;
      }
      if (obj[acc]) {
          obj[acc].push(strs[i])
      } else {
          obj[acc] = [strs[i]];
          result.push(obj[acc]);
      }
  }
  return result;
};