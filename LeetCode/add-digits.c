#include <stdio.h>

int addDigits(int num)
{
  int rest = num % 9;
  return num <= 9 ? num : rest == 0 ? 9 : rest;
}