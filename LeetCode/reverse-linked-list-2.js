// mine
// 시작점 다음 순서를 끝점 다음 순서로 보내는 알고리즘.
// 2n - m - 2 정도 순회하는듯 하다.
var reverseBetween = function(head, m, n) {
  let start = new ListNode();
  start.next = head;
  let left = start;
  let right = start;
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    if (cur < m) {
      left = left.next;
      cur++;
    }
    right = right.next;
  }
  while (cur < n) {
    const newNext = left.next;
    left.next = left.next.next;
    newNext.next = right.next;
    right.next = newNext;
    cur++;
  }
  return start.next;
};

// Mine that refer other's
// 그냥 시작점의 다음을 계속 바꿔나가는 알고리즘
// 윗 알고리즘처럼 m번째 전까지 가볼 필요가 없다.
// 딱 n - 1번정도 순회한다.
var reverseBetween = function(head, m, n) {
  let start = new ListNode();
  start.next = head;
  let left = start;
  let num = n - m;
  while (--m > 0) {
    left = left.next;
  }
  let pivot = left.next;
  while (num-- > 0) {
    const newNode = pivot.next;
    pivot.next = pivot.next.next;
    newNode.next = left.next;
    left.next = newNode;
  }
  return start.next;
};
