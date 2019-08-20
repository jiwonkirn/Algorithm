// first
// 328ms
var insertionSortList = function(head) {
  if (!head) return head;
  const root = new ListNode(-Infinity);
  root.next = head;
  let cur = head.next;
  let pivot;
  function helper(node) {
    // 끝지점의 다음이 비교할 대상이라면
    // 끝지점을 일단 다음 노드와 연결시킨 뒤에
    // 다음 노드를 다음 순서로 만들고 비교해나간다.
    // 비교해나간다
    if (node.next !== cur) {
      helper(node.next);
    } else {
      pivot = cur;
      cur = cur.next;
      node.next = cur;
    }
    if (!pivot) return;
    if (node.val < pivot.val) {
      pivot.next = node.next;
      node.next = pivot;
      pivot = null;
    }
  }
  while (cur) {
    helper(root);
  }
  return root.next;
};

// second
// 132ms
var insertionSortList = function(head) {
  const arr = [];
  const root = new ListNode(-Infinity);
  root.next = head;
  let node = root;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  for (var i = 2; i < arr.length; i++) {
    const pivot = arr[i];
    let idx = i;
    for (var j = i - 1; j >= 0; j--) {
      const cur = arr[j];
      if (cur.val > pivot.val) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]];
        idx = j;
        cur.next = pivot.next;
        pivot.next = cur;
        arr[j - 1].next = pivot;
      } else {
        break;
      }
    }
  }
  return root.next;
};

// other's
// 현재와 다음을 저장해두고
// 현재 > 다음이면
// 처음부터 확인해서 순서 바꿈
// 68ms
let insertionSortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = new ListNode(0),
    pre = head,
    current = pre.next;
  newHead.next = head;
  while (current) {
    let temp = newHead;
    let next = current.next;
    if (current.val < pre.val) {
      while (temp.next.val < current.val) {
        temp = temp.next;
      }
      current.next = temp.next;
      temp.next = current;
      pre.next = next;
      current = next;
    } else {
      current = current.next;
      pre = pre.next;
    }
  }
  return newHead.next;
};
