#include <stdio.h>
#include <stdbool.h>

// FIRST
bool isIsomorphic(char *s, char *t)
{
  char arr[128];
  char seen[128];
  for (int i = 0; i < 128; i++)
  {
    arr[i] = NULL;
    seen[i] = 0;
  }

  int length = strlen(s);

  for (int i = 0; i < length; i++)
  {
    char index = s[i];
    char seenIdx = t[i];
    if (arr[index] == NULL && seen[seenIdx])
      return false;
    if (arr[index] == NULL)
    {
      arr[index] = t[i];
      seen[seenIdx] = 1;
      continue;
    }
    printf("%c %c\n", arr[index], t[i]);
    if (arr[index] != t[i])
    {
      return false;
    }
  }

  return true;
}

// SECOND
bool helper(char *s, char *t)
{
  int *arr = calloc(128, sizeof(int));

  for (int i = 0; s[i] != '\0'; i++)
  {
    int index = (int)s[i];
    if (arr[index] == 0)
    {
      arr[index] = t[i];
      continue;
    }
    if (arr[index] != t[i])
    {
      return 0;
    }
  }

  return 1;
}

bool isIsomorphic(char *s, char *t)
{
  return helper(s, t) && helper(t, s);
}
