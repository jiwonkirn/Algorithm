// mine (800ms, memory 100%)
// quick 소트 기반
function helper(root, end) {
  if (root.next === end) return;
  const start = root.next;
  let last = start;
  let cur = start.next;
  while (cur !== end) {
    if (start.val > cur.val) {
      last.next = cur.next;
      cur.next = root.next;
      root.next = cur;
      cur = last.next;
    } else {
      last = last.next;
      cur = cur.next;
    }
  }
  helper(root, start);
  helper(start, cur);
}

var sortList = function(head) {
  const newHead = new ListNode(null);
  newHead.next = head;
  helper(newHead, null);
  return newHead.next;
};

// other's
// merge sort 기반
var sortList = function(head) {
  var mergeSort = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    if (head.next.next === null) {
      if (head.next.val >= head.val) return head;
      let tmp = head.next;
      head.next = null;
      tmp.next = head;
      return tmp;
    }
    let fast = head;
    let slow = head;
    let pre = head;
    while (fast !== null && fast.next !== null) {
      pre = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    pre.next = null;
    return merge(mergeSort(head), mergeSort(slow));
  };

  var merge = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2);
      return l1;
    }
    l2.next = merge(l1, l2.next);
    return l2;
  };
  return mergeSort(head);
};
