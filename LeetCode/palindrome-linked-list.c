#include <stdio.h>
#include <stdbool.h>

struct ListNode
{
  int val;
  struct ListNode *next;
};

// FIRST
void helper(struct ListNode **left, struct ListNode *right, bool *res)
{
  if (right == NULL)
    return;
  helper(left, right->next, res);
  if (*res == false)
    return;
  if ((*left)->val == right->val)
  {
    (*left) = (*left)->next;
  }
  else
  {
    (*res) = false;
  }
}

bool isPalindrome(struct ListNode *head)
{
  struct ListNode *left = head;
  struct ListNode *right = head;
  bool res = true;
  helper(&left, right, &res);
  return res;
}

// SECOND
bool isPalindrome(struct ListNode *head)
{
  struct ListNode *left = head;
  struct ListNode *right = head;
  struct ListNode *cur = head;
  struct ListNode *middle = NULL;

  while (right != NULL && right->next != NULL)
  {
    left = left->next;
    right = right->next->next;
  }

  while (left != NULL)
  {
    struct ListNode *nextNode;
    nextNode = left->next;
    left->next = middle;
    middle = left;
    left = nextNode;
  }

  while (middle != NULL)
  {
    if (cur->val != middle->val)
      return false;
    cur = cur->next;
    middle = middle->next;
  }

  return true;
}
