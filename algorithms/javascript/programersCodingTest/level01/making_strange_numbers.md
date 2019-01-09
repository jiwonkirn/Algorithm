# 이상한 문자 만들기

## 문제 설명

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

### 제한사항

문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.

---

## 풀이

### 내 풀이

```js
function solution(s) {
  const a = s.split("");
  let count = true;
  let order = 0;
  return a
    .map(item => {
      if (item === " ") {
        count = false;
        order = 0;
      } else {
        count = true;
      }
      if (count && order % 2 === 0) {
        order++;
        return item.toUpperCase();
      } else if (count && order % 2 !== 0) {
        order++;
        return item.toLowerCase();
      }
      return item;
    })
    .join("");
}
```

### 다른 사람 풀이

```js
function toWeirdCase(s) {
  // 문자 2개의 연속된 것을 대문자 + 소문자로 바꾼다.
  // 다만 단어가 홀수개의 글자일 경우 마지막 글자를 해당 정규표현식으로 인식하지 못하므로
  // 모두 대문자로 바꾼뒤 replace한다.
  return s
    .toUpperCase()
    .replace(/(\w)(\w)/g, a => a[0].toUpperCase() + a[1].toLowerCase());
}
```
