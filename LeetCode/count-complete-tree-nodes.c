// 난이도는 MEDIUM 이긴 한데 좀 쉬운듯..

#include <stdio.h>
#include <stdlib.h>

struct TreeNode
{
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

// =============
// FISRT (BFS)
// =============
struct Node
{
  struct TreeNode *data;
  struct Node *next;
};

struct Queue
{
  struct Node *start;
  struct Node *end;
  int count;
};

void push(struct Queue *queue, struct TreeNode *data)
{
  struct Node *node = (struct Node *)malloc(sizeof(struct Node));
  node->data = data;
  node->next = NULL;
  if (queue->count == 0)
  {
    queue->start = node;
  }
  else
  {
    queue->end->next = node;
  }
  queue->end = node;
  queue->count++;
}

struct TreeNode *pop(struct Queue *queue)
{
  if (queue->count <= 0)
    return NULL;

  struct Node *node = queue->start;
  struct TreeNode *treeNode = node->data;

  if (queue->count == 1)
  {
    queue->start->data = NULL;
  }
  else
  {
    queue->start = node->next;
    free(node);
  }
  queue->count--;
  return treeNode;
}

int countNodes(struct TreeNode *root)
{
  // Queue 초기화
  struct Queue *queue = (struct Queue *)malloc(sizeof(struct Queue));
  queue->count = 0;

  struct Node *start = (struct Node *)malloc(sizeof(struct Node));
  start->data = NULL;
  start->next = NULL;

  struct Node *end = start;

  queue->start = start;
  queue->end = end;

  // return 될 트리 노드의 수
  int res = 0;

  if (root != NULL)
  {
    push(queue, root);
    res++;
  }

  // bfs 시작
  while (queue->count > 0)
  {
    struct TreeNode *first = pop(queue);
    if (first->left != NULL)
    {
      push(queue, first->left);
      res++;
    }
    if (first->right != NULL)
    {
      push(queue, first->right);
      res++;
    }
  }

  return res;
}

// ===================
// SECOND (RECURSIVE)
// ===================
void helper(struct TreeNode *node, int *res)
{
  if (node == NULL)
    return;
  if (node->left != NULL)
    helper(node->left, res);
  if (node->right != NULL)
    helper(node->right, res);
  *res = *res + 1;
}

int countNodes(struct TreeNode *root)
{
  int res = 0;
  helper(root, &res);
  return res;
}

// ==================
// THIRD (RECURSIVE)
// ==================
int countNodes(struct TreeNode *root)
{
  if (root == NULL)
    return 0;
  return countNodes(root->left) + countNodes(root->right) + 1;
}
