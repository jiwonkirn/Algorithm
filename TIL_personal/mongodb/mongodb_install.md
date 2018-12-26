# mongobd 설치하기

## 설치

다음 링크에서 운영체제에 맞는 파일을 다운로드 한다.

[mongodb](https://www.mongodb.com/download-center?jmp=nav)

`homebrew`를 통해 install하고 싶다면 다음과 같이 할 수 있다.

```bash
$ brew install mongodb

$ mongo -version
MongoDB shell version: 3.2.8
```

기본 베이스 디렉토리를 설정한다.

```bash
$ mkdir -p /data/db
```

권한을 부여하고 싶다면 아래와 같이 입력한다.

```bash
$ chmod 777 /data/db  # 혹은 chmod 777 *
```

## db 가동

db 서버를 가동하고 싶다면 아래와 같이 입력한다.

```bash
$ mongod

# 서버 가동에 성공했다면 맨 밑줄에 아래와 같이 출력된다.
# waiting for connections on port 27017
```

db 클라이언트로서 서버에 접속하고 싶다면 아래와 같이 입력한다.

```bash
$ mongo

# 접속에 성공한다면 아래와 같이 출력된다.
MongoDB shell version v4.0.4
connecting to: mongodb://127.0.0.1:27017
Implicit session: session { "id" : UUID("a8c60376-c35b-41cc-ac87-e8b8c7030794") }
...
```

## 간단한 실습

실행된 클라이언트에서 다음과 같은 실습을 할 수 있다.

```bash
# db에 키-값의 정보를 입력한다.
$ db.names.insert({"name": "jiwon"})
> wirteResult({"nInserted": 1})

#
$ db.names.find()
> { "_id" : ObjectId("5c232eef49da73f8e43f48fc"), "name" : "jiwon" }
```

## mongodb gui tool

[Robo 3T](https://robomongo.org/download)

> Robo 3T는 무료툴, Studio 3T는 유료툴이다.
