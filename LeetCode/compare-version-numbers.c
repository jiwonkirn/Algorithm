// mine
// MEDIUM
// C언어로 작성해보았다.

#include <stdio.h>
#include <string.h>

typedef struct
{
  char *arr[10000];
  int size;
} Array;

Array makeArr(char *version)
{
  char *tok = strtok(version, ".");
  Array v;
  v.size = 0;
  while (tok != NULL)
  {
    v.arr[v.size] = tok;
    tok = strtok(NULL, ".");
    v.size++;
  }
  return v;
}

int compareVersion(char *version1, char *version2)
{
  Array v1 = makeArr(version1);
  Array v2 = makeArr(version2);
  int size = v1.size > v2.size ? v1.size : v2.size;
  for (int i = 0; i < size; i++)
  {
    int n1 = 0, n2 = 0;
    if (i < v1.size)
      n1 = atoi(v1.arr[i]);
    if (i < v2.size)
      n2 = atoi(v2.arr[i]);
    if (n1 > n2)
      return 1;
    if (n1 < n2)
      return -1;
  }
  return 0;
}

// other's
// 오호...
int get_v(char *s, int *si)
{
  int i, oi;
  i = *si;
  if ('.' == s[i])
    i++;
  oi = i;
  while ('0' <= s[i] && s[i] <= '9')
    i++;
  while ('0' == s[oi] && oi < i - 1)
    oi++;
  *si = oi;
  return i - oi;
}

int cmp(char *s0, int l0, char *s1, int l1)
{
  int i;
  if (l0 < l1)
    return -1;
  if (l0 > l1)
    return 1;
  for (i = 0; i < l0; i++)
  {
    if (s0[i] < s1[i])
      return -1;
    if (s0[i] > s1[i])
      return 1;
  }
  return 0;
}

int compareVersion(char *v1, char *v2)
{
  int s0, s1, len0, len1, ret;
  s0 = s1 = 0;
  len0 = get_v(v1, &s0);
  len1 = get_v(v2, &s1);
  while (0 < len0 && 0 < len1)
  {
    ret = cmp(v1 + s0, len0, v2 + s1, len1);
    if (ret)
      return ret;
    s0 += len0;
    s1 += len1;
    len0 = get_v(v1, &s0);
    len1 = get_v(v2, &s1);
  }
  if (len0)
  {
    do
    {
      if ('0' != v1[s0])
        return 1;
      s0 += len0;
      len0 = get_v(v1, &s0);
    } while (0 < len0);
  }
  if (len1)
  {
    do
    {
      if ('0' != v2[s1])
        return -1;
      s1 += len1;
      len1 = get_v(v2, &s1);
    } while (0 < len1);
  }
  return 0;
}
