# Keywords

나중에 찾아서 공부해야할 키워드등

## OOP (객체 지향 프로그래밍) keyword

1. 캡슐 (encapsulation): 정보 은닉을 포함 \*\*\*
2. 정보 은닛(information hiding)
3. 다형성 (polymorphism): 상속 (inheritance) \*\*\*

- 구현 방법: 메소드 오버라이딩 (method overloading) vs 함수 오버로딩 (function overloading)

4. 디자인 패턴 (SOLID)

- S, Single responsibility principle (단일 책임)
- O, Open-closed principle (확장 폐쇄)
- L, Liskov substitution principle (리스코프 치환)
- I, Interface segregation principle (인터페이스 분리)
- D, Dependency inversion principle (의존 역전 원리)

> 자주 쓰이는 디자인 패턴: observer, abstract factory

> GOF (Gang of Four): 디자인 패턴에 대해 설명한 책

---

## 메모리

### 메모리 계층, 메모리 레이아웃

- 레지스터
- 캐시
- 메인메모리
- 하드디스크 / SSD

#### 메인메모리

segmentation

- code segmentation
- data segmentation
- heap => 느리다, 동적
- stack => 빠르다, 동적

때문에 짧은 문장은 stack에 넣어서 빠르게 한다.

---

### 지역성의 원리: principle of locality

- 시간 지역성
- 공간 지역성

cache hi, cache miss => 지역성이 지켜지지 않았을때 일어나는 일

segmentation => 가상메모리

---

page
page frame
page fault
page table

---

## 자료구조

### 선형 자료구조

- stack
- queue
- linked list

### 비선형 자료구조

- Tree (이진 트리)

  - tree에 대한 이산수학
  - 순회
    - DFS, Stack (재귀로 구현(stack frame), 반복문으로 stack)
      - 전위 preorder
      - 중위 inorder
      - 후위 postorder
    - BFS
    - 레벨 순서levelorder

- BST (Binary Search Tree): Search가 최악의 경우 O(n), 대안으로 균형 이진 트리

- 균형 이진 트리 (Balanced Tree, Self balancing)

  - AVL 트리
  - RED-BLACK 트리

- B-Tree (데이터베이스의 인덱스)

  - 균형 이진 트리 + 하드웨어 아키텍쳐

- Heap (완전 이진트리): 일반적으로 배열로 구현한다.

### Hash (해시)

- Hash Table(map)
  - Hash function
  - collision(충돌)
    - chaining (체이닝)
    - open-addressing 기법

### Graph (그래프)

- 순회

  - DFS: 깊이 우선 탐색 (stack 기반)
  - BFS: 너비 우선 탐색 (queue 기반)

- MST(Minimum Spanning Tree): 최소 신장 트리, greedy 알고리즘 기반

  - kruslcal algorithm
  - prim algorithm

- 최단 경로 문제 (shortest path)
  - Dijkstra algorithm
  - Bellman-ford algorithm
  - floyd-warshall algorithm => Dynamic Programming
