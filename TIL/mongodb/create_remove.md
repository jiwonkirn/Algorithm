# Database/Collection/Document 생성·제거

## Database 생성

`use DATABASE_NAME` 명령어를 통해 Database를 생성할 수 있다.

```bash
> use mongodb_tutorial
switched to db mongodb_tutorial
```

사용중인 데이터베이스를 확인할 수 있다.

```bash
> db
mongodb_tutorial
```

데이터베이스 리스트들을 확인할 수 있다.

```bash
> show dbs
admin             0.000GB
config            0.000GB
local             0.000GB
mongodb_tutorial  0.000GB
```

만약에 추가한 데이터베이스가 보이지 않는다면 최소 한개 이상으 `Document`를 추가해야 한다.

```bash
# 아래에서 book은 Collection이다.
> db.book.insert({"name": "book1", "author": "jiwon"})
WriteResult({ "nInserted" : 1 })
```

---

## Database 제거

`db.dropDatabase()` 명령어를 통해 데이터베이스를 제거할 수 있다. 이 명령어를 사용하기 전에는 `use DATABASE_NAME`을 통해 삭제하고자 하는 데이터베이스를 선택해줘야 한다.

```bash
> use mongodb_tutorial
switched to db mongodb_tutorial
> db.dropDatabase();
{ "dropped" : "mongodb_tutorial", "ok" : 1 }
```

---

## Collection 생성

`db.createCollection(name, [options])`명령어를 통해 Collection을 생성할 수 있다.

- `name` 매개변수는 Collection의 이름이며 타입은 `String`이다.
- `options` 매개변수는 생략이 가능한 선택적인 매개변수이다.

  | Field         | Type      | 설명                                                                                                                                                                                                                                      |
  | ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `capped`      | `Boolean` | 이 값을 true 로 설정하면 capped collection 을 활성화 시킨다. Capped collection 이란, 고정된 크기(fixed size) 를 가진 컬렉션으로서, size 가 초과되면 가장 오래된 데이터를 덮어쓰게된다. 이 값을 true로 설정하면 size 값을 꼭 설정해야한다. |
  | `autoIndexId` | `Boolean` | `true`라면 `_id`필드에 자동으로 `index`를 생성한다. default는 `false`이다.                                                                                                                                                                |
  | `size`        | `number`  | Capped collection을 위해 최대 사이즈를 byte단위로 지정한다.                                                                                                                                                                               |
  | `max`         | `number`  | 해당 컬렉션에 추가할 수 있는 최대 갯수를 설정한다.                                                                                                                                                                                        |
