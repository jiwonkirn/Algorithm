/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

void flatten(struct TreeNode* root){
  if (root == NULL) return;
  
  flatten(root -> left);
  
  if (root -> left != NULL) {
    struct TreeNode* left = root -> left;
    struct TreeNode* temp = root -> right;
    struct TreeNode* last = left;
    while (last -> right != NULL) {
      last = last -> right;
    }
    
    root -> right = left;
    root -> left = NULL;
    last -> right = temp;
  }
  
  flatten(root -> right);
}
