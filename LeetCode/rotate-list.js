// 생각을 너무 많이 한 듯 하다...ㅠ
var rotateRight = function(head, k) {
  const arr = [];
  let len = 0;
  let first = new ListNode(null);
  let cur = first;
  cur.next = head;
  while (cur.next) {
    len++;
    cur = cur.next;
    arr.push(cur);
  }
  const point = k % len;
  if (len < 2 || point === 0) return head;
  const start = arr[arr.length - point];
  const last = cur;
  const nextLast = arr[arr.length - point - 1];

  nextLast.next = null;
  last.next = head;
  return start;
};

// other's
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let index = head;
  let len = 1;
  while (index.next != null) {
    index = index.next;
    len++;
  }
  index.next = head;
  for (let i = 1; i <= len - (k % len); i++) {
    index = index.next;
  }
  let res = index.next;
  index.next = null;
  return res;
};
