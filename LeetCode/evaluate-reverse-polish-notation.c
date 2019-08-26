#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 99999999

// FIRST
int stack[MAX];
int size = -1;

void push(int val)
{
  size += 1;
  stack[size] = val;
}

int pop()
{
  size -= 1;
  return stack[size + 1];
}

int calc(int num1, int num2, char *operator)
{
  int res;
  if (!strcmp(operator, "+"))
    res = num1 + num2;
  else if (!strcmp(operator, "-"))
    res = num1 - num2;
  else if (!strcmp(operator, "*"))
    res = num1 * num2;
  else
    res = num1 / num2;
  return res;
}

int isOperator(char *token)
{
  if (!strcmp(token, "+") || !strcmp(token, "-") || !strcmp(token, "*") || !strcmp(token, "/"))
    return 1;
  return 0;
}

int evalRPN(char **tokens, int tokensSize)
{
  for (int i = 0; i < tokensSize; i++)
  {
    if (isOperator(tokens[i]))
    {
      int num2 = pop();
      int num1 = pop();
      push(calc(num1, num2, tokens[i]));
    }
    else
    {
      push(atoi(tokens[i]));
    }
  }
  return stack[size];
}

// SECOND
int evalRPN2(char **tokens, int tokensSize)
{
  int *stack = malloc(sizeof(int) * tokensSize);
  int size = -1;

  for (int i = 0; i < tokensSize; i++)
  {
    if (!strcmp(tokens[i], "+"))
    {
      stack[size - 1] = stack[size - 1] + stack[size];
      size -= 1;
    }
    else if (!strcmp(tokens[i], "-"))
    {
      stack[size - 1] = stack[size - 1] - stack[size];
      size -= 1;
    }
    else if (!strcmp(tokens[i], "*"))
    {
      stack[size - 1] = stack[size - 1] * stack[size];
      size -= 1;
    }
    else if (!strcmp(tokens[i], "/"))
    {
      stack[size - 1] = stack[size - 1] / stack[size];
      size -= 1;
    }
    else
    {
      size += 1;
      stack[size] = atoi(tokens[i]);
    }
  }

  return stack[size];
}
