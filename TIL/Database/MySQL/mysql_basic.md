# MySQL

## 데이터베이스

데이터베이스는 관련성을 가지며 중복이 없는 데이터들의 집합니다. 이러한 데이터베이스를 관리하는 시스템은 DBMS(DataBase Management System) 보통 서버의 HDD/SSD등의 저장매체레 저장을 하기 때문에 서버가 종료돼도 정보가 날아가지 않는다.

## MySQl

데이터베이스를 관리하는 DBMS중에서 RDBMS(Relational Database)라는 관계형 DBMS가 많이 사용되는데, MySQL이 가장 많이 사용된다.

> Oracle, MySQL, MSSQL이 대표적인 RDBMS이다. 각각 조금씩 다른 SQL문을 사용한다.

### 설치

`homebrew`를 통해 설치할 수 있다.

```zsh
brew install mysql
brew services start mysql # root 비밀번호 등을 설정.
mysql_secure_installation

mysql -h localhost -u root -p # mysql 접속
```

### 데이터베이스 생성하기

`CREATE SCHEMA [데이터베이스명]`으로 데이터베이스를 생성한다.

```zsh
mysql > CREATE SCHEMA nodejs;
```

SQL 구문을 입력할 때는 마지막에 세미콜론(;)을 붙여야 실행이 된다. `CREATE SCHEMA` 같은 예약어를 소문자로 써도 되지만 대문자로 쓰는 것이 best practice이다.

### 테이블 생성하기

테이블이란 데이터가 들어갈 수 있는 틀을 의미한다. 아래와 같이 유저 테이블을 생성할 수 있다.

```sql
/* 세미콜론을 작성하기 전 까지는 개행을 해도 실행되지 않는다. */
mysql > CREATE TABLE nodejs.users (
  -> id INT NOT NULL AUTO_INCREMENT,
  -> name VARCHAR(20) NOT NULL,
  -> age INT UNSIGNED NOT NULL,
  -> married TINYINT NOT NULL,
  -> comment TEXT NULL,
  -> created_at DATETIME NOT NULL DEFAULT now(),
  -> PRIMARY KEY(id),
  -> UNIQUE INDEX name_UNIQUE (name ASC))
  -> COMMENT = '사용자 정보'
  -> DEFAULT CHARSET=uft8
  -> ENGINE=InnoDB;

Query OK, 0 row affected (0.09sec)
```

1. 테이블 생성

- `CREATE TABLE [데이터베이스명.테이블명]`은 테이블을 생성하는 명령어이다.

2. 자료형 정의

- `INT`: 정수를 의미한다. (`DOUBLE`, `FLOAT`는 실수 자료형)
- `VARCHAR(자릿수)`: 가변길이 문자열, 0 ~ 자릿수만큼 문자열을 넣을 수 있다.
- `CHAR(자릿수)`: 고정길이 문자열, 오직 자릿수만큼의 문자열만 넣을 수 있다. 자릿수보다 짧은 문자열을 넣는다면 남는 자릿수만큼 스페이스가 채워진다.
- `TEXT`: 긴 글을 저장할 때 사용된다. 몇백자 이내는 `VARCAHR`, 그 이상은 `TEXT`를 사용한다.
- `TINYINT`: -127부처 128까지의 정수를 저장할 깨 사용한다. 1 또는 -만 저장한다면 Boolean과 같은 역할ㄹ 사용할 수 있다.
- `DATETIME`: 날짜와 시간에 대한 정보를 담고 있다.
  - `DATE`: 날짜 정보만 담는 자료형
  - `TIME`: 시간 정보만 담는 자료형

3. 옵션

- `NULL` / `NOT NULL`: 데이터 입력이 필수인지를 정의하는 옵션이다.
- `AUTO_INCREMENT`: 숫자를 저절로 올리겠다는 옵션이다.
- `UNSIGNED`: 음수 범위를 지원할지 지원하지 않을지를 선택하는 옵션이다. 실수는 `UN` 적용이 불가능하다.
  - `SIGNED`: -2^31 ~ 2^31 - 1
  - `UNSIGNED`: 0 ~ 2^32 - 1
- `ZEROFILL`: INT(4)와 같이 자릿수가 지정된 정수에 데이터가 들어갔을 때 남는 자리를 0으로 채운다.
- `DEFAULT now()`, `CURRENT_TIMESTAMP`: 입력값이 없을 때 기본값으로 연재 시간을 넣어준다.
- `PRIMARY KEY(컬럼키)`: 로우의 기본 키(고유한 키, 식별자 e.p) id)를 어떤 컬럼으로 설정할지 정하는 옵션.
- `UNIQUE INDEX`: 값이 고유해야하는지에 대한 옵션이다. 인덱스의 이름은`name_UNIQUE`로, name 컬럼을 오름차순(ASC <-> DESC)으로 기억하라는 의미이다.

> `PRIMARY KEY`나 `UNIQUE INDEX`의 경우에는 데이터베이스가 별도로 컬럼을 관리하므로 조회 시 속도가 빨라진다. `PRIMARY KEY`는 자동으로 `UNIQUE INDEX`를 포함하므로 따로 적지 않아도 된다.

4. 테이블 자체 설정

- `COMMENT`: 테이블에 대한 보충설명. 필수 항목은 아니다.
- `DEFAULT CHARSET`: 인코딩 설정.
- `ENGINE`: `MyISAM`, `InnoDB`가 가장 많이 사용된다.

### 만들어진 테이블 확인, 제거

- 확인: `mysql> DESC nodejs.users`
- 제거: `mysql> DROP TABLE nodejs.users`

### 테이블 만들기2

사용자의 댓글을 저장하는 테이블

```sql
mysql> CREATE TABLE nodejs.comments (
  -> id INT NOT NULL AUTO_INCREMENT,
  -> commenter INT NOT NULL, /*댓글을 작성한 사용자의 id*/
  -> comment VARCHAR(100) NOT NULL, /*댓글 내용*/
  -> create_at DATETIME NOT NULL DEFAULT now(), /*로우 생성일*/
  -> PRIMARY KEY(id),
  -> INDEX commenter_idx (commenter ASC), /*다른 테이블의 키본 키이므로 인덱스 설정*/
  -> CONSTRAINT commenter
  -> FOREIGN KEY (commenter) /*다른 테이블의 기본키를 저장하는 컬럼을 외래 키(foreign key)라고 한다.*/
  -> REFERENCES nodejs.users (id) /*commenter 컬럼과 users테이블의 id컬럼과 연결*/
  -> ON DELETE CASCADE
  -> ON UPDATE CASCADE)
  -> COMMENT = '댓글'
  -> DEFAULT CHARSET=utf8
  -> ENGINE=InnoDB;
Query OK, row affected (0.09 sec)
)
```

- 외래 키는 `CONSTRAINT [제약조건명] FOREIGN KEY ([컬럼명]) REFERENCES ([참고하는 테이블.컬럼명])`과 같이 표기하여 지정할 수 있다.
- `ON UPDATE`, `ON DELETE CASCADE`: 사용자 정보가 수정되거나 삭제되면 그것과 연결된 댓글 정보도 같이 수정하거나 삭제한다는 뜻.

#### 만들어진 테이블 확인

`SHOW TABLES`

> No Database Selected 에러가 뜨면 use [database_name] 과 같이 db를 선택해준다.

### CRUD 작업하기

#### Create (생성)

`use [데이터베이스]`를 통해 사용할 데이터베이스를 지정해주었다면 테이블 이름만 입력해도 접근할 수 있다.

row를 생성할 때는 `INSERT INTO [데이터베이스.태이블] (col, col, col..) VALUES (val, val, val);`과 같은 방식으로 입력한다.

```
mysql> INSERT INTO nodejs.users (name, age, married, comment) VALUES ('jiwon', 28, 0, "자기소개");

mysql> INSERT INTO nodeks.comments (commenter, comment) VALUES (1, "코멘트입니다.")
```

#### Read (조회)

다음 명령어를 통해 데이터를 조회할 수 있다.

```sql
SELECT * FROM nodejs.comments;
```

다음 명령어를 통해 특정 데이터만 조회할 수 있다.

```sql
SELECT name, married FROM nodejs.comments;
```

WHERE 절을 사용하면 특정 조건을 가진 데이터만 조회할 수 있다.

```sql
/*결혼을 했고 나이가 26세 이하힌 사용자를 조회하는 sql문, AND로 여러 조건을 묶을 수 있다.*/
SELECT name, age FROM nodejs.users WHERE married = 1 AND age <= 26;
```

OR는 조건들 중 하나라도 만족하는 데이터를 찾는다.

```sql
SELECT id, name FROM nodejs.users WHERE married = 0 OR age < 24;
```

`ORDER BY [컬럼명][ASC|DESC]` 키워드를 사용해서 정렬도 가능하다.

```sql
SELECT id, name FROM nodejs.users ORDER BY age ASC;
```

조회할 로우의 개수를 설정할 수도 있다. `LIMIT [숫자]` 키워드를 사용한다.

```sql
SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;
```

로우의 개수를 설정하면서 몇개를 건너쮤지 설정할 수도 있다. `OFFSET [건너뛸 숫자]` 키워드를 사용한다.

```sql
SELECT id, name FROM nodejs.users ORDER BY age ASC LIMIT 1 OFFSET 1;
```

#### Update (수정)

`UPDATE [테이블명] SET [컬럼명 = 바꿀 값] WHERE [조건]`으로 수정할 수 있다. 조건도 OR이나 AND로 여러개를 걸 수 있다.

```sql
UPDATE nodejs.users SET comment = "바꿀 내용" WHERE id = 2;
```

#### Delete (삭제)

`DELETE FROM [테이블명] WHERE [조건]`과 같이 입력하여 조건에 맞는 데이터를 삭제할 수 있다. 삭제 역시 `OR`나 `AND`로 조건을 걸 수 있다.
`

```sql
DELETE FROM nodejs.users WHERE id = 1;
```
