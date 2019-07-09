# process & thread

## 프로세스

실행 흐름, instruction(기계어)의 나열. 각각의 프로세스는 메모리나 코드를 공유하지 않는다.

32bit 기준으로 프로세스에게 4G 메모리를 할당한다. 이를 virtual address space(가상 주소 공간)이라고 한다.

multi process

```
process01  process02  process03  process04
  code       code       code       code
  ----       ----       ----       ----
  data       code       code       code
  ----       ----       ----       ----
  heap       code       code       code
  ----       ----       ----       ----
  stack      stack      stack      stack
```

동시에 여러개의 실행흐름이 필요한 프로그래밍이 concurrency programming, 이를 위해 multi-processing을 했었다.

여러개의 process를 돌릴 때(multi-processing) 각각의 process간에 데이터, 메모리를 공유(IPC)하는 것은 어렵고 무거운 작업이다. 때문에 프로세스 내에서 메모리를 공유할 수 있는 thread가 쓰인다.

실행 흐름 => instruction 실행 => 함수 실행 => stack frame in stack

thread

```
                process01
                  code
                  ----
                  data
                  ----
                  heap
  ---------------------------------------
  stack      stack      stack      stack
```

thread를 돌리면 shared resource를 사용하기 때문에 concurrency를 해결할 수 있고, IPC가 일어나지 않는다.

> 공유 자원 (shared resource)

### GIL: Global Interpretor Lock

파이썬에서 중요한 키워드, 나중에 찾아보도록 한다.

---

### Concurrency programming & Parallel programming

#### Concurrency programming (동시성 프로그래밍)

프로세스가 하나이지만 thread를 나누는 것, 동시에 도는 것처럼 보이지만 나머지 thread는 wating이 걸린다.

> single core multi threading

#### Parallel programming (병렬 프로그래밍)

여러개의 프로세스(CPU 하드웨어)가 동시에 실행된다.

> multi core multi threading

---

### 가장 이상적인 threading

가장 이상적인 threading은 shared resourse가 없는 것이다. shared resourse가 많아지면 `race condition`이 일어난다.

```py
import threading

# 공유 자원
# 모든 스레드에서 접근이 가능한 자원
# 전역 변수

g_num = 0


def thread_main():
    global g_num

    for _ in range(200000):
        g_num += 1


threads = []

for _ in range(50):
    th = threading.Thread(target=thread_main)
    threads.append(th)

for th in threads:
    th.start()

for th in threads:
    th.join()

print(f'g_num: {g_num}') # 1000000이 항상 나오지 않는다 => race condition
```

thread 자체도 thread control block(TCB)을 가지고 있다. context switching이 일어나게 되고 instruction은 TCB에 저장되지만, memory 값은 공유되기 때문에 문제가 발생할 수 있다. (메모리에 연산을 저장하기 전에 context switching이 일어나게 되고, 다른 thread가 메모리를 변경한 뒤 돌아온 thread가 메모리에 예전 값을 덮어씌우거나 하면 원하는 동작이 나지 않는다.)

상호 배제, 다른 thread가 메모리를 수정, 뱐경할 때 까지 기다린다.

```py
import threading

# 공유 자원
# 모든 스레드에서 접근이 가능한 자원
# 전역 변수

g_num = 0

# Lock 객체
lock = threading.Lock()


def thread_main():
    global g_num

    # critical section
    # 임계 영역
    # 어떤 스레드에서 공유 자원에 접근한 후
    # 수정, 변경 하려는 코드
    # 대신 속도가 조금 느려진다.
    lock.acquire()
    for _ in range(200000):
        g_num += 1
    lock.release()


threads = []

for _ in range(50):
    th = threading.Thread(target=thread_main)
    threads.append(th)

for th in threads:
    th.start()

for th in threads:
    th.join()

print(f'g_num: {g_num}')  # 1000000이 항상 나오지 않는다 => race condition

```

- multithreading: cpu-bound, io-bound 둘 다 작성 / 디버깅이 어렵다.
- asynchronous io, single threading: io, io-bound 작성 / 디버깅이 쉽다.

> co-routine이라는 개념까지 공부하기
