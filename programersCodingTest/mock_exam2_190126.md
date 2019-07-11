# 공채 대비 코딩테스트 실전 모의고사 2회

[링크](https://programmers.co.kr/competitions/92/%EA%B3%B5%EC%B1%84-%EB%8C%80%EB%B9%84-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A4%EC%A0%84-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-2%ED%9A%8C)

## 1번 문제 (숫자 밀기)

```js
function solution(arrA, arrB) {
  const arr = [];
  const arrCopy = arrA.slice();

  for (let i = 0; i < arrA.length; i++) {
    const a = arrCopy.pop();
    arrCopy.unshift(a);

    const copy = arrCopy.slice();
    arr.push(copy);
  }

  return arr.some(c => c.every((i, d) => i === arrB[d]));
}
```

## 2번 문제 (가로등)

```js
function solution(l, v) {
  const arr = v.sort((x, y) => x - y);
  const start = arr[0];
  const end = l - arr[arr.length - 1];
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const sub = arr[i + 1] - arr[i];
    if (sub > result) result = sub;
  }

  return Math.ceil(Math.max(start, end, result / 2));
}
```

## 3번 문제 (빙고) => 효율성 탈락

```js
function solution(board, nums) {
  let result = 0;
  const le = board.length;

  // 대각선, 역대각선
  if (board[0].every((c, i) => nums.includes(board[i][i]))) result++;
  if (board[0].every((c, i) => nums.includes(board[i][le - i - 1]))) result++;

  for (let j = 0; j < le; j++) {
    // 가로, 세로
    if (board[0].every((c, i) => nums.includes(board[j][i]))) result++;
    if (board[0].every((c, i) => nums.includes(board[i][j]))) result++;
  }

  return result;
}
```

해설

```py
def solution(board, nums):
    n = len(board)
    vertical = [0 for _ in range(n)]
    horizontal = [0 for _ in range(n)]
    lu_diag = 0
    ru_diag = 0

    # 탐색을 O(1)로 하기 위해 nums를 set 자료구조로 변환
    nums = set(nums)
    for p in range(n):
        for q in range(n):
            if board[p][q] in nums:
                horizontal[q]+=1
                vertical[p]+=1
                if p == q:
                    lu_diag+=1
                if p + q == n - 1:
                    ru_diag += 1

    cnt = 0
    cnt += vertical.count(n)
    cnt += horizontal.count(n)
    if lu_diag == n:
        cnt += 1
    if ru_diag == n:
        cnt += 1
    return cnt
```
