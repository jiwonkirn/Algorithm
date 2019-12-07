#include <stdio.h>

char **summaryRanges(int *nums, int numsSize, int *returnSize)
{
  char **res = malloc(sizeof(char *) * numsSize);

  int start = 0;
  *returnSize = 0;

  for (int i = 0; i < numsSize; i++)
  {
    while (i < numsSize - 1 && nums[i] + 1 == nums[i + 1])
      i++;

    int idx = *returnSize;
    res[idx] = calloc(25, sizeof(char));

    if (start == i)
      sprintf(res[idx], "%d", nums[i]);
    else
      sprintf(res[idx], "%d->%d", nums[start], nums[i]);

    start = i + 1;
    (*returnSize)++;
  }

  return res;
}
