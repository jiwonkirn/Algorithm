// mine
// 중복되는 구간을 발견하면 pivot 하나를 잡아서 모든 중복을 지우고
// pivot도 지운다.
// prev를 두어 하는 방법도 있었는데 크게 차이가 있어보이지는 않다.
var deleteDuplicates = function(head) {
  let cur = new ListNode(null);
  let start = cur;
  cur.next = head;
  while (cur.next) {
    if (cur.next.next && cur.next.val === cur.next.next.val) {
      let dup = cur.next;
      while (dup.next) {
        if (dup.val !== dup.next.val) {
          break;
        }
        dup.next = dup.next.next;
      }
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return start.next;
};
