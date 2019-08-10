const arr = [1, 10, 5, 8, 2, 4, 3, 9, 7];

function quick(arr) {
  function helper(start, end) {
    if (start >= end) return;
    let pivot = arr[start];
    let left = start + 1;
    let right = end;
    while (left <= right) {
      while (arr[left] <= pivot && left <= right) {
        left++;
      }
      while (arr[right] >= pivot && left <= right) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }
    [arr[start], arr[right]] = [arr[right], arr[start]];
    helper(start, right - 1);
    helper(right + 1, end);
  }
  helper(0, arr.length - 1);
}

quick(arr);
