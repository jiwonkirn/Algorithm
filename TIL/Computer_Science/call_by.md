```c
#include <stdio.h>

// call by value
void change_value(int a, int value) { // 스택프레임은 매개변수에 한해서 오른쪽 -> 왼쪽으로 쌓인다. 값을 단순학 복사해서 전달, call by value
  a = value;
  printf("%d in cheange_value\n", a);
  return;
}

int main(void) {
  int a = 10;
  change_value(a, 30);
  printf("%d in main\n", a);
  return 0;
}

// call by reference
void change_value2(int* a, int value) { // call by reference, 해당 메모리 주소(참조)를 전달한다. 주소를 읽어서 수정한다.
  *a = value; // *레퍼런싱을 통해 완벽하게 a의 값을 수정한다.
  printf("%d in cheange_value\n", *a);
  return;
}

int main(void) {
  int a = 10;
  change_value2(&a, 30);
  printf("%d in main\n", a);
  return 0;
}
// 원래는 change_value가 main의 메모리(데이터)에 접근할 수 없다. 하지만 주소(참조)가 넘어간 것이기 때문에 main에 있는 원본 a에 접근할 수 있는 것이다.

// 원래 주소값을 전달하는 것 또한 값이기 때문에 call by value라고 데니스 리치가 정의를 했다. 하지만 다른 frame에 접근이 가능하기 때문에 이러한 기준으로 나눌 수 있다.
// call by address 키워드로 더 공부해보기
// 어떤 function stack frame에서 다른 frame의 값에 접근 수정이 불가능하다 => call by value
// 어떤 function stack frame에서 다른 frame의 값에 접근 수정이 가능하다 => call by reference, 참조 혹은 주소값이 넘어가기 때문에
// call by reference 를 구현하기 위해 python에서는 global과 nonlocal 키워드를 사용한다.
```
