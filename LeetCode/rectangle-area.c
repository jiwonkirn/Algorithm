#include <stdio.h>
#include <limits.h>

// FISRT
int getMin(int a, int b, int c, int d)
{
  int min = INT_MAX;
  if (a < min)
    min = a;
  if (b < min)
    min = b;
  if (c < min)
    min = c;
  if (d < min)
    min = d;
  return min;
}

int computeArea(int A, int B, int C, int D, int E, int F, int G, int H)
{
  // 각 사각형 너비, 높이
  int awidth = C - A;
  int bwidth = G - E;
  int aheight = D - B;
  int bheight = H - F;

  int width = 0;
  int height = 0;

  // 겹치는 영역이 있어야한다.
  if (C > E && G > A)
    width = getMin(awidth, bwidth, C - E, G - A);
  if (D > F && H > B)
    height = getMin(aheight, bheight, D - F, H - B);

  // 사각형1 너비 + 사각형2 너비 - 겹치는 영역
  return awidth * aheight - width * height + bwidth * bheight;
}

// OTHER's
int getIntersec(int A, int B, int C, int D)
{
  int x = (A > C) ? A : C;
  int y = (B < D) ? B : D;
  return y > x ? (y - x) : 0;
}

int computeArea(int A, int B, int C, int D, int E, int F, int G, int H)
{
  int awidth = C - A;
  int bwidth = G - E;
  int aheight = D - B;
  int bheight = H - F;

  return (int)((long long int)(awidth * aheight) + (long long int)(bwidth * bheight) - getIntersec(A, C, E, G) * getIntersec(B, D, F, H));
}
