# OS

## 키워드 / 목표:

- Job scheduling => scheduler => context-switching

  - process status (프로세스 상태)
    - thread => multi-threading을 하기 위해서. => concurrency programming (동시성 프로그래밍)

- concurrency programming (동시성 프로그래밍)
  javascript는 개발자가 싱글스레드만을 사용할 수 있기 때문에 프로그래밍 차원에서 concurrency를 지원

- multihreading

  - race-condition
  - dead-lock

- Asynchronous I/O (I/O bound): 자바스크립트가 언어차원에서 지원하는 방식, 언어의 기반

---

## 프로그램 / 프로세스

- 프로그램(program): 하드디스크에 저장되어 있는 하나의 이미지 (하드디스크의 code, data 계층)
- 프로세스(process): 메인 메모리에 올라와서 실행을 시작한 프로그램

프로그램 이름이 같다고 하더라고 여러개의 프로세스에 띄울 수 있다. 프로그램을 실행시키면 os는 process id를 부여한다.

더블 클릭을 한다고 해서 바로 실행되는 것이 아니다.

- create: 생성, 메모리에 올라옴

- waiting: queue, pid에는 priority(우선순위)가 부여된다. OS의 스케줄러는 우선순위를 보고 우선순위가 높은 프로그램 순으로 큐를 정렬한다.

  - 실행중인 프로그램보다 새로 생성된 프로그램의 우선순위가 높아서 현재 실행중인 프로그램의 실행을 멈추고 (우선순위가 높은) 새로운 프로그램을 우선 실행시키는 것이 preemptive scheduling이다.

    > 높은 우선순위 순서대로 실행하는 것은 prioriry algorithm에 기반한다.

    - 선점형 스케줄링(preemptive scheduling): 쉽게 말해 새치기 가능
    - 비선점형 스케줄링(non-preemptive scheduling): 쉽게 말해 새치기 불가

  - `round robin algorithm`: 시간(5ms...) 단위를 정해서 해당 시간이 다 되면 큐의 가장 마지막으로 끌어내린다. 우선순위가 같을 때도 적용받을 수 있다.
    - time slice
    - quantum

- running: 실행, cpu에 할당

- blocked: I/O, system call이 일어나게 되면, cpu를 사용하지 않기 때문에 blocked로 내려오게된다. I/O나 system call이 끝나면 waiting queue로 들어가게 된다. (우선순위를 적용받는다.) blocked가 걸린 프로그램은 I/O가 완료될 때 까지 waiting, running으로 갈 수 없다.

  > I/O는 대개 네트워크 작업이다. 네트워크에서 어떤 자원을 불러오는데는 cpu를 사용하지 않고 대기하게 된다.

- terminated: 프로그램 실행이 끝나게 되면 terminated된다.

> 낮은 우선순위의 작업이 실행을 하는데 너무 대기를 오래하게되면 aging을 하여 우선순위를 높여주게 된다.

##### 운영체제별 pid

- window: pid(process id)를 랜덤하게 준다.
- linux: pid를 순서대로 준다.

---

### Context Switching

waiting 에서 프로그램을 올리고 running에서 내리는 작업을 할 때 기존의 프로세스의 상태 또는 레지스터 값(Context)을 저장하고 CPU가 다음 프로세스를 수행하도록 새로운 프로세스의 상태 또는 레지스터 값(Context)를 교체하는 작업, cpu의 레지스터에 저장되어있는 값

instruction: cpu와 memory 사이에서의 작동방식을 구현하는 것

- instruction register(IR): 현재 실행되고 있는 instruction
- program counter(PC): 다음에 실행될 instruction, code segment에 있다. (+ 주소값)

- program control block: 갑자기 waiting queue에 의해 끌어내려졌을 때 작업중이던 작업(instruction register(IR), program counter(PC) 등)을 program control block에 저장한다.

memory에서 register로 가져갈 때 clock 100, 느리다. program control block은 메모리에 있기 때문에 cpu에서 메모리를 읽어오는 것이 느리고 많은 작업이 일어난다. 그래서 context switching이 자주 일어나면 cpu에 과부하가 일어나게 된다.(over clock) 시간 분할을 작게 잡을 수록 과부하가 많이 걸리고, 길게 잡으면 멀티 태스킹이 아니게 된다.
