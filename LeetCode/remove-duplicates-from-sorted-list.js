// 다음 노드가 중복이면 연결을 제거한다.
// Linked List의 기본이라 그런지 쉽게 풀음.
var deleteDuplicates = function(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
