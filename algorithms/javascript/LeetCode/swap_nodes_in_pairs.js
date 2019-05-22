// 48 ms ~ 64ms (99.08%), 33.4 MB ~ 33.9 MB
var swapPairs = function(head) {
  const start = new ListNode(null);
  start.next = head;
  let cur = start;
  while (cur.next && cur.next.next) {
    const first = cur.next;
    const second = cur.next.next;
    first.next = second.next;
    second.next = first;
    cur.next = second;
    cur = cur.next.next;
  }
  return start.next;
};

// other's 재귀
var swapPairs = function(head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  const node = swapPairs(head.next.next);
  const p2 = head.next;
  p2.next = head;
  head.next = node;
  return p2;
};
