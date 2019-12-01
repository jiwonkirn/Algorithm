#include <stdio.h>

typedef struct
{
  int val;
  struct ListNode *next;
} ListNode;

// first
ListNode *removeElements(ListNode *head, int val)
{
  while (head != NULL && head->val == val)
  {
    ListNode *first = head;
    head = head->next;
    free(first);
  }

  if (head == NULL)
    return head;

  ListNode *prev = head;
  ListNode *cur = head->next;
  while (prev != NULL && cur != NULL)
  {
    if (cur->val == val)
    {
      ListNode *target = cur;
      prev->next = cur->next;
      cur = cur->next;
      free(target);
    }
    else
    {
      prev = cur;
      cur = cur->next;
    }
  }

  return head;
}

// second
ListNode *removeElements(ListNode *head, int val)
{
  ListNode *prev = NULL;
  ListNode *cur = head;

  while (head != NULL && head->val == val)
  {
    head = head->next;
    cur = head;
  }

  while (cur != NULL)
  {
    if (cur->val == val)
    {
      cur = cur->next;
      prev->next = cur;
    }
    else
    {
      prev = cur;
      cur = cur->next;
    }
  }

  return head;
}
