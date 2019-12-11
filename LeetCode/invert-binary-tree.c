#include <stdio.h>
#include <stdbool.h>

struct TreeNode
{
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

struct TreeNode *invertTree(struct TreeNode *root)
{
  if (root == NULL)
    return NULL;
  invertTree(root->left);
  invertTree(root->right);
  struct TreeNode *left = root->left;
  root->left = root->right;
  root->right = left;
  return root;
}