# 알고리즘

## 알고리즘 성능 측정 방법

- lower bound: 최선의 연산 (사용하지 않는다.)
- seta: 최선의 연산 < 범위 < 최악의 연산 (사용할 수 있을 때 가용하는 것이 좋다.)
- bigO: upper bound: 최악의 연산 (보통 가장 많이 사용)

### 알고리즘 성능

1. O(1): 상수 시간 (constant time)

데이터가 아무리 늘어나도 같은 시간을 지닌다.

> e.p. 배열의 indexing, linked-list의 삽입과 삭제

2. O(log n): 로그 시간

> e.p. Binary Search Tree (insert, search, delete), linear bineary search

3. O(n): 선형 시간 (linear time)

> e.p. linked-list의 탐색, (빈 공간을 허용하지 않는) 배열에서의 삽입과 삭제

4. O(n log n): 선형 로그시간

비교 정렬(comparision sorting)의 경우 O(n log n)보다 성능이 좋을 수 없다.

> e.p. merge sort, quick sort (comparision sorting에서 최고 성능을 보인다.)

5. O(n^2): 지수 시간

> e.p bubble sort, selection sort, insertion sort ...

---

## 정렬 알고리즘

### 단순 알고리즘

bubble, insertion, selection

### 정복 알고리즘

quick, merge, heap

- 분할 정복 기법 (divide & conquer)
  - 어려운 문제를 잘게 쪼갬
  - 작게 쪼개진 문제를 하나씩 해결함
  - 작은 solution들이 모여서 전체 문제에 대한 solution을 구하는 기법
  - quick sort, merge sort
