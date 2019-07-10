// mine
// 내 알고리즘은 inplace로 구현됨
// 발견하면 떼어서 앞에 붙이는 식으로 순서를 바꿈
// inplace이기 때문에 많은 메모리를 사용하지 않는다.
var partition = function(head, x) {
  if (!head) return head;
  let start = new ListNode(null);
  start.next = head;
  const result = start;
  let pivot = head;
  while (pivot.next) {
    if (start.next.val < x) {
      start = start.next;
      pivot = pivot.next;
    } else {
      while (pivot.next) {
        if (pivot.next.val < x) {
          const lesser = pivot.next;
          pivot.next = pivot.next.next;
          lesser.next = start.next;
          start.next = lesser;
          start = start.next;
          break;
        } else {
          pivot = pivot.next;
        }
      }
    }
  }

  return result.next;
};

// Other's
// 두 리스트 자료구조를 새로 생성한 뒤
// List를 순회하여
// 한 쪽 리스트에는 작은 수 한쪽 리스트에는 큰수를 만든 뒤
// 두 리스트를 붙이고 return한다.
// 좀 더 깔끔하다.
var partition = function(head, x) {
  var left = new ListNode();
  var res = left;
  var right = new ListNode();
  var rightOrigin = right;
  while (head) {
    if (head.val >= x) {
      right.next = new ListNode(head.val);
      right = right.next;
    } else {
      left.next = new ListNode(head.val);
      left = left.next;
    }
    head = head.next;
  }
  left.next = rightOrigin.next;
  return res.next;
};
