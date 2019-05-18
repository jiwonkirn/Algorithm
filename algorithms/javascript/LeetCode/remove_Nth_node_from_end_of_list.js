// 56 ms (98.57%), 34 MB (87.92%)
var removeNthFromEnd = function(head, n) {
  let length = 1;
  let node = head;
  while (node.next) {
    length++;
    node = node.next;
  }
  if (length === n) {
    return head.next;
  }
  let cur = 1;
  node = head;
  while (cur < length - n) {
    node = node.next;
    cur++;
  }
  node.next = node.next.next || null;
  return head;
};

// other's
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode(null);
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;

  while (n + 1 > 0) {
    fast = fast.next;
    n--;
  }

  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
};
