// MEDIUM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// mine
// 동적으로 작업하는 iterator (혹은 흡사 generator 함수)
var BSTIterator = function(root) {
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

BSTIterator.prototype.next = function() {
  if (this.stack.length <= 0) return -99999;
  const cur = this.stack.pop();
  let root = cur.right;
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
  return cur.val;
};

BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};
