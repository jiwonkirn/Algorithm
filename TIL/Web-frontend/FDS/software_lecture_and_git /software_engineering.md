# 소프트웨어 공학

*2018년 10월 19일 금요일*

출처 [Ulgoon](https://github.com/ulgoon/fds-se/blob/develop/handouts/day01-git%2CSE.md)

Software engineering (SWE) is the application of engineering to the design, development, implementation, testing and maintenance of software in a systematic method.

소프트웨어의 개발, 운용, 유지보수 등의 생명 주기 전반을 체계적이고 서술적이며 정량적으로 다루는 학문

---

### Development

소프트웨어 전반 프로세스를 모두 컨트롤하는 사람.

### Implementation

컴퓨터 프로그래밍이나 코드를 짜는 정도의 사람.

---

### PWA(progressive web application)

2018년 트렌드, 웹이 앱의 성격을 따라가려고 한다.

스마트폰의 기능에 접근할 수 있고(하드웨어의 기능에 접근), 점점 발전하는 중이다.

---

### DevOps(Development Operations)

개발 팀이 운영의 부분까지 맡는 것을 말한다.

소프트웨어 개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는 개발 환경이나 문화를 말한다. 데브옵스는 소프트웨어 개발조직과 운영조직간의 상호 의존적 대응이며 조직이 소프트웨어 제품과 서비스를 빠른 시간에 개발 및 배포하는 것을 목적으로 한다. 

[decOps-wiki](https://ko.wikipedia.org/wiki/%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4)

---

### 개발생명주기(Software Development Life Cycle)

#### 요구사항 분석(Requirements Analysis)

Requirements => 시스템이 어떻게 동작해야 하는지 혹은 시스템의 특징이나 속성에 대한 설명

어떻게하면 클라이언트나 수혜자를, 사용자의 요구를 만족시킬 수 있는지

비용, 기한, 기능, 로드맵, 보안, 서버용량 등 계획과 목표를 뚜렷하게 한다.

- 요구사항 유도(수집): 대화를 통해 요구사항을 결정하는 작업
- 요구사항 분석: 수집한 요구사항을 분석하여 모순되거나 불완전한 사항을 해결하는 것
- 요구사항 기록: 요구사항의 문서화 작업

비지니스 요구사항과 사용자 요구사항을 분석해서 시나리오를 짠다.

Use cases, Scenarios, User stories, Event-response tables, ..

---

#### 기술 요구사항 (Functional Requirements)

> 개발자가 이 제품의 "무엇"을 개발할 것인지

'~ 해야 한다' 로 끝나 반드시 수행해야 하거나 사용자가 할 수 있어야 하는 것들에 대해 작성

---

#### Business Rules

- 비즈니스 스트럭쳐의 요구나 제약사항을 명세
- "유저 로그인을 위해서는 페이스북 계정이 있어야 한다."
- "유저 프로필 페이지에 접근하기 위해서는 로그인되어 있어야 한다"

---

#### Quality Attribute

- 소프트웨어의 품질에 대해 명세
- "결제과정에서 100명의 사용자가 평균 1.5초의 지연시간 안에 요청을 처리해야 한다"

---

#### External Interface

- 시스템과 외부를 연결하는 인터페이스
- 다른 소프트웨어, 하드웨어, 통신 인터페이스, 프로토콜, ..

----

#### Constraint

- 기술, 표준, 업무, 법, 제도 등의 제약조건 명세
- 개발자들의 선택사항에 제한을 두는 것

---

### Software Development Process

in Agile 

---

#### UP(Unified Process)

도입(분석위주), 상세(설계위주), 구축(구현위주), 이행(최종 릴리즈)의 반복

#### XP(eXtreme Process)

- 스크럼 마스터가 주도적으로 프로세스를 주도하며, 고객과 개발자 사이의 소통을 중시함
- Product Owner와 Development Team, Customer로 롤을 구분하고 각자의 역할에 충실
- TDD 중시

#### TDD(Test Driven Development)

- 객체지향적
- 재설계 시간 단축
- 디버깅 시간 단축
- 애자일과의 시너지(사용자 중심적)
- 테스트 문서 대체
- 추가 구현 용이

#### Software Release Life Cycle

초기 개발단계부터 마지막 출시까지 주기를 나타냄

**버전 네이밍이 중요하다.**

> ex) v0.0.0.1810190001 => v정식.베타.알파.년월일순서(a,b,rc)

#### Scrum(master)

an iterative and incremental agile software development framework for managing product development.

