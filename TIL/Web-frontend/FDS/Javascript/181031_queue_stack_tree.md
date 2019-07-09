# 181031 TIL

## 큐(Queue), 스택(Stack)

### 큐(Queue)

다음과 같은 성질을 갖는 자료형이다.

- 데이터를 집어넣을 수 있는 선형(linear) 자료형이다.
- 먼저 집어넣은 데이터가 먼저 나온다. 이 특징을 FIFO(First In First Out) 또는 선입선출 이라고 한다.
- 데이터를 집어넣는 동작을 enqueue, 데이터를 추출하는 동작을 dequeue라고  한다.

javascript로 구현한 큐(Queue)
```js
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
```

큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용된다.

> 웹에서 동영상 출력의 원리는 스트리밍에서 저료를 버퍼라는 임시저장소에 인큐한다.

---

### 스택(Stack)

스택은 다음과 같은 성질을 갖는 자료형이다.

- 데이터를 집어넣을 수 있는 선형(linear)자료형이다.
- 최근에 집어넣은 데이터가 먼저 나온다. 이를 LIFO(Last In First Out)라고 한다.
- 데이터를 집어넣는 동작은 push, 추출하는 것을 pop, 맨 나중에 집어넣은 데이터를 확인하는 동작을 peek라고 한다.

javascript로 구현한 스택
```js
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
```

스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.

> 웹브라우저의 뒤로가기는 스택의 방식이다.
> `Ctrl + Z` 와 같은 되돌리기(Undo) 기능을 이 방식으로 한다.

---