// mine
// left와 right를 분할해서 탐색, O(n log n)
var sortedArrayToBST = function(nums) {
  function helper(start, end) {
    if (start > end) return null;
    const mid = Math.ceil((start + end) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = helper(start, mid - 1);
    node.right = helper(mid + 1, end);
    return node;
  }
  return helper(0, nums.length - 1);
};
