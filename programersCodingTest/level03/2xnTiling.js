// 2 x n 타일링

/*
가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

타일을 가로로 배치 하는 경우
타일을 세로로 배치 하는 경우
*/

function solution(n) {
  const stack = [1, 2];
  for (let i = 2; i < n; i++) {
    stack[i] = (stack[i - 1] + stack[i - 2]) % 1000000007;
  }
  return stack[n - 1];
}
