#include <stdio.h>

// FIRST
void swap(int *nums, int idx1, int idx2)
{
  int temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
}

void moveZeroes(int *nums, int numsSize)
{
  int start = -1;
  int end = -1;
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] == 0)
    {
      if (start < 0)
        start = i;
      end = i;
    }
    else
    {
      if (start >= 0)
      {
        swap(nums, start, i);
        if (start == end)
          end += 1;
        start += 1;
      }
    }
  }
}

// SECOND
void moveZeroes(int *nums, int numsSize)
{
  int pivot = 0, i = 0;
  for (i = 0; i < numsSize; i++)
  {
    if (nums[i] != 0)
      nums[pivot++] = nums[i];
  }
  for (i = pivot; i < numsSize; i++)
  {
    nums[i] = 0;
  }
}
