# Sequelize (시퀄라이즈)

시퀄라이즈는 node환경의 개발에서 mysql 작업을 쉽게 도와주는 라이브러리다. 시퀄라이즈는 ORM(Objrct-Relational Mapping)으로 분류된다.

> ORM: 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해주는 도구

시퀄라이즈는 MariaDB, PostgreSQL, SQLite, 등의 데이커베이스와도 같이 쓸 수 있다. sql구문 없이 javascript로 MySQL을 접근할 수 있다는 점에서 편리하게 사용할 수 있다.

## mysql, sequelize 설치하기

```zsh
yarn add sequelize mysql2 # mysql, sequelize 설치
yarn global add sequelize-cli # sequelize cli 설치
sequelize init # sequelize init
```

생성된 `models/iddex.js`를 다음과 같이 수정하도록 한다.

```js
const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

## MySQL 연결하기

시퀄라이즈를 통해 MySQL과 연결해준다.

app.js

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const sequelize = require("./models").sequelize;

var app = express();
sequelize.sync();
```

## 모델 정의하기

MySQL의 테이블은 시퀄라이즈의 모델과 대응된다. 테이블 이름은 복수형이지만 시퀄라이즈에서 모델 명을 지정해줄때는 단수형으로 한다.

models/user.js

```js
module.exports = (sequalize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: false
      },
      age: {
        type: DateTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false // createAt, updateAt 컬럼을 자동으로 추가해준다.
      // paranoid: true, // deleteAt이라는 컬럼이 추가된다. 실제로 데이터가 삭제되지 않고 삭제된 데이터값이 들어간다. timestamps가 true일때 사용한다.
      // underscored: true, // deleteAt, createAt, updateAt을 snake_case 식별자로 바꿔준다.
      // tableName: true // 시퀄라이즈는 define메서드의 첫번째인자를 복수형으로 만들어 테이블 이름으로 사용한다. tableName을 true로 하면 이러한 자동 변환을 막아준다.
    }
  );
};
```

models/comment.js

```js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "comment",
    {
      comment: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      create_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false
    }
  );
};
```

models/index.js와 연결

```js
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);

module.exports = db;
```

config/config.json 설정 (개발일 때)

```json
{
  "development": {
    "username": "root",
    "password": "root_password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
},
...
```

## 관계 정의하기

### 1 : N

유저 한명을 여러개의 댓글을 남길 수 있다. (1 : N)

models/index.js: 모델들을 연결해준 곳 밑에 추가로 넣어준다.

```js
db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" });

module.exports = db;
```

`npm start` 명령어를 입력하면 데이터 베이스와의 연결이 이루어지면서 서버와 연결된다. 이 때 없는 테이블은 생성해주고 이미 존재하는 테이블에는 접근한다.

### 1 : 1

회원과 회원의 정보와 같이 1:1로만 대응되는 관계

```js
db.User.hasOne(db.Info, { foreignKey: "user_id", sourceKey: "id" });
db.Info.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
```

### N : M

포스트의 해시태그들, 해시태그의 여로 포스트들과 같이 N : M 으로 대응되는 관계

```js
db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
```

Post와 Hashtag는 PostHashtag라는 테이블을 통해 각각의 id값을 담은 로우를 참조할 수 있다. 예를 들어 hashtag의 id값을 PostHashtag 테이블에서 참조하고, 필터링된 로우의 postid를 찾아 post 테이블에서 값을 불러온다.

시퀄라이즈는 이러한 작업을 쉽게 하도록 메서드를 지원한다.

```js
async (req, res, next) => {
  const tag = await Hashtag.find({ where: { title: "노드" } });
  const posts = await tag.getPosts(); // get + 모델이름의 복수형을 사용한다.
};
```

다음 코드는 title이 노드인 해시태그와 게시글 아이디가 3인 게시글을 연결하는 코드이다.

```js
async (req, res, next) => {
  const tag = await Hashtag.find({ where: { title: "노드" } });
  await tag.setPosts(3);
};
```

## 쿼리 알아보기
