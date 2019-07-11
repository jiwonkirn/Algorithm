// best practice (56ms, 100% / 35.5mb, 70.83%)
// 2시간 경과 후 다른 사람 코드 보고 이해, 해석 후 작성
var maxArea = function(height) {
  // 양 끝을 기준으로 너비를 구한 뒤 현재의 최대값보다 크면 최대값을 재할당하고,
  // 작은 기둥 사이드는 큰 기둥을 찾아 한칸씩 이동한다. (최대한 큰 기둥을 기준으로 먼 것을 찾는것이 유리하기 때문)
  // 두 기둥이 겹치면 반복문을 멈춘다.
  // 탐색했던 것들 중에 가장 큰 것을 return한다.
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    const smaller = height[left] < height[right] ? left : right;
    const width = height[smaller] * (right - left);
    if (max < width) {
      max = width;
    }
    if (smaller === left) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

// second try (524 ms, 35.65% / 40.2mb)
var maxArea = function(height) {
  // 최대값 순서대로 정렬을 하되 인덱스도 포함한다.
  // 첫 요소를 최소값으로 하면서 만날 수 있는 가장 큰 경우의 수 저장,
  // 그 다음 요소를 최소값으로 하면서 만날 수 있는 가장 큰 경우의 수 저장,
  // 만약 현재 요소가 가질 수 있는 요소중에 가장 큰 요소가 현재 최대 요소보다 작으면 현재 최대값을 리턴
  const arr = height.map((c, i) => [c, i]);
  arr.sort((a, b) => b[0] - a[0]);
  let max = 0;
  for (let i = 1; i < height.length; i++) {
    if (arr[i][0] * height.length <= max) {
      break;
    }
    let curMax = 0;
    for (let j = i - 1; j >= 0; j--) {
      const width = arr[i][0] * Math.abs(arr[i][1] - arr[j][1]);
      if (curMax < width) {
        curMax = width;
      }
    }
    if (max < curMax) {
      max = curMax;
    }
  }
  return max;
};

// first try (704 ms, 23.38% / 35.6mb)
// 모든 경우의 수 구하기, 런타임 최악
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const water = (j - i) * Math.min(height[i], height[j]);
      if (water > max) {
        max = water;
      }
    }
  }
  return max;
};
