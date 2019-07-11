// Mine
// 큰 수부터 뒤에서 채워나가는 방식
// 복잡도는 O(n)
// 중첩 if문을 사용한 풀이도 있는데,
// 아주 큰 차이는 없어보인다.
var merge = function(nums1, m, nums2, n) {
  let cur = nums1.length - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[cur] = nums1[m];
      m--;
    } else {
      nums1[cur] = nums2[n];
      n--;
    }
    cur--;
  }
  while (m >= 0) {
    nums1[cur] = nums1[m];
    m--;
    cur--;
  }
  while (n >= 0) {
    nums1[cur] = nums2[n];
    n--;
    cur--;
  }
};

// Other's
// 좀 더 간결하게 푼 해답.
// 아주 큰 복잡도의 차이는 없어보이지만,
// i--, m--의 반환값을 고려해서 알고리즘을 짠 것이
// 좋아보였다 :)
const merge = (nums1, m, nums2, n) => {
  let i = m + n - 1;
  m--;
  n--;

  while (m >= 0 || n >= 0) {
    if (n < 0 || nums1[m] >= nums2[n]) {
      nums1[i--] = nums1[m--];
    } else if (m < 0 || nums2[n] >= nums1[m]) {
      nums1[i--] = nums2[n--];
    }
  }
};
