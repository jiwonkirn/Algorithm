function merge(li, start, end) {
  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2);
  merge(li, start, middle);
  merge(li, middle + 1, end);
  sorting(li, start, middle, end);
}

function sorting(li, start, mid, end) {
  const merged = [];
  let left = start;
  let right = mid + 1;
  while (left <= mid && right <= end) {
    if (li[left] < li[right]) {
      merged.push(li[left]);
      left++;
    } else {
      merged.push(li[right]);
      right++;
    }
  }
  if (left <= mid) {
    merged.push(...li.slice(left, mid + 1));
  }
  if (right <= end) {
    merged.push(...li.slice(right, end + 1));
  }

  for (let i = start, j = 0; i < end + 1; i++) {
    li[i] = merged[j];
    j++;
  }
}

function random(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * n));
  }
  return arr;
}

const li = random(20);

console.log(li);
merge(li, 0, li.length - 1);
console.log(li);
