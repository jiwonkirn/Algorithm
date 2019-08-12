// first
var hasCycle = function(head) {
  const set = new Set();
  let node = head;
  while (node) {
    if (set.has(node)) {
      return true;
    }
    set.add(node);
    node = node.next;
  }
  return false;
};

// second
var hasCycle = function(head) {
  let node = head;
  while (node) {
    if (node.done) {
      return true;
    }
    node.done = true;
    node = node.next;
  }
  return false;
};
