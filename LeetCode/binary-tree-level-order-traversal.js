// mine
// depth의 index를 지정하여 재귀 함수로 풀음
var levelOrder = function(root) {
  const arr = [];
  function helper(node, index) {
    if (!node) return;
    if (!arr[index]) arr[index] = [];
    arr[index].push(node.val);
    helper(node.left, index + 1);
    helper(node.right, index + 1);
  }
  helper(root, 0);
  return arr;
};

// other's
// queue를 이용
var levelOrder = function(root) {
  const res = [];
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const cur = [];
    const len = queue.length;
    for (var i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      cur.push(node.val);
    }
    res.push(cur);
  }
  return res;
};

// mine
// queue를 linked-list로
class ListNode {
  constructor(node = null) {
    this.node = node;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.start = new ListNode();
    this.end = new ListNode();
    this.start.next = this.end;
    this.end.prev = this.start;
    this.size = 0;
  }

  add(node) {
    const newNode = new ListNode(node);
    newNode.next = this.start.next;
    newNode.next.prev = newNode;
    this.start.next = newNode;
    newNode.prev = this.start;
    this.size += 1;
  }

  remove() {
    const node = this.end.prev;
    this.end.prev = this.end.prev.prev;
    this.end.prev.next = this.end;
    this.size -= 1;
    return node.node;
  }
}

var levelOrder = function(root) {
  const res = [];
  const queue = new Queue();
  if (root) queue.add(root);
  while (queue.size) {
    const cur = [];
    const size = queue.size;
    for (var i = 0; i < size; i++) {
      const node = queue.remove();
      if (node.left) {
        queue.add(node.left);
      }
      if (node.right) {
        queue.add(node.right);
      }
      cur.push(node.val);
    }
    res.push(cur);
  }
  return res;
};
