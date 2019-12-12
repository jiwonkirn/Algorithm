#include <stdio.h>
#include <stdbool.h>

struct TreeNode
{
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{
  if (root == NULL || root == p || root == q)
    return root;
  struct TreeNode *left = lowestCommonAncestor(root->left, p, q);
  struct TreeNode *right = lowestCommonAncestor(root->right, p, q);
  if (left != NULL && right != NULL)
    return root;
  else
    return left ? left : right;
}