#include <stdio.h>

int *majorityElement(int *nums, int numsSize, int *returnSize)
{
  int rs = 0;

  if (numsSize == 0)
  {
    *returnSize = 0;
    return nums;
  };

  int num = numsSize / 3;
  int count1 = 0, num1 = -1;
  int count2 = 0, num2 = -1;
  for (int i = 0; i < numsSize; i++)
  {
    int cur = nums[i];
    if (cur == num1)
      count1++;
    else if (cur == num2)
      count2++;
    else if (count1 == 0)
    {
      num1 = cur;
      count1 = 1;
    }
    else if (count2 == 0)
    {
      num2 = cur;
      count2 = 1;
    }
    else
    {
      count1--;
      count2--;
    }
  }

  int num1Count = 0, num2Count = 0;
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] == num1)
      num1Count++;
    else if (nums[i] == num2)
      num2Count++;
  }

  if (count1 > 0 && num1Count > num)
    nums[rs++] = num1;

  if (count2 > 0 && num2Count > num)
    nums[rs++] = num2;

  *returnSize = rs;

  return nums;
}