// 타일 장식물
/*
대구 달성공원에 놀러 온 지수는 최근에 새로 만든 타일 장식물을 보게 되었다. 타일 장식물은 정사각형 타일을 붙여 만든 형태였는데, 한 변이 1인 정사각형 타일부터 시작하여 마치 앵무조개의 나선 모양처럼 점점 큰 타일을 붙인 형태였다. 타일 장식물의 일부를 그리면 다음과 같다.
*/

// 내 풀이
function solution(N) {
  const arr = [1, 1];
  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return (arr[arr.length - 1] + arr[arr.length - 2]) * 2;
}

// 다른 사람 풀이
function solution(N) {
  const arr = [1, 2];
  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[N] * 2;
}
