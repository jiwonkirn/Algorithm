#include <stdio.h>

struct ListNode
{
  int val;
  struct ListNode *next;
};

struct ListNode *reverseList(struct ListNode *head)
{
  struct ListNode *prev = NULL;
  while (head != NULL)
  {
    struct ListNode *cur = head;
    struct ListNode *next = head->next;
    cur->next = prev;
    prev = cur;
    head = next;
  }
  return prev;
}
