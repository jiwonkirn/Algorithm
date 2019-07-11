// mine 56 ~ 68ms (99.33%), 35.5MB
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(null);
  let cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }

  while (l1) {
    cur.next = new ListNode(l1.val);
    cur = cur.next;
    l1 = l1.next;
  }

  while (l2) {
    cur.next = new ListNode(l2.val);
    cur = cur.next;
    l2 = l2.next;
  }

  return head.next;
};

// other's: 남은건 그대로 붙여버린다.
const mergeTwoLists = function(l1, l2) {
  const mergedHead = new ListNode(-1);
  let crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;
  return mergedHead.next;
};

// 48ms (best)
const mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1];
  }
  l1.next = mergeTwoLists(l1.next, l2);

  return l1;
};
