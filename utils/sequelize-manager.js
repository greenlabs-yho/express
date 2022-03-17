const { Sequelize, DataTypes } = require('sequelize');

// dbName 별 sequelize객체를 관리 (process 가 살아있는동안 계속 유지)
const sequelizeDict = {}

class SequelizeManager {
  static COMMON_DB_LIST = ['woosung', ]

  constructor(dbConfig, user_code, table_prefix) {
    const dbName = user_code;
    if (!dbName) {
        throw new Error(`user code is invalid - ${dbName}`)
    }

    // 기존에 구성해둔것이 없으면 생성
    if (!(dbName in sequelizeDict)) {
      sequelizeDict[dbName] =  new Sequelize(dbName, dbConfig.DB_USER, dbConfig.DB_PASSWORD, 
      {
          host: dbConfig.DB_HOST,
          dialect: dbConfig.PRODUCT || 'mysql',
          pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idel:10000
          }
      });
      console.log('create sequelize');
    }

    this.user_code = dbName;
    this.table_prefix = table_prefix;
    this.sequelize = sequelizeDict[dbName];
    // 해당 요청에서 사용할 model 들 (객체가 살아있는 동안에만 유지)
    this.modelDict = {}

    // models 접근자로 접근해서 사용할 Model 객체들.
    this.models = new Proxy(this, {
      get(target, name, receiver) {
          if (!(name in target.modelDict)) {
            // db 구조별로 분기처리를 해야할 필요가 있는 경우 여기에 로직 전개한다.
            // join 관련 로직도 여기에 함께 전개해야할 듯 하다.

            // 이미 생성된게 없으면 동적으로 생성한다.
            let dynamicModelFunc = null;
            if(SequelizeManager.COMMON_DB_LIST.includes(dbName)) {
              dynamicModelFunc = require(`../model/${dbName}/${name}`)
            } else {
              dynamicModelFunc = require(`../model/common/${name}`)
            }
            if (dynamicModelFunc) {
              // 모델 생성
              target.modelDict[name] = dynamicModelFunc(target.sequelize, DataTypes)
            } else {
              throw new Error(`[sequelize] not exists DB models - ${name}`)
            }
          }

          return target.modelDict[name];
      }
    })
    return this
  }
}


// 종료 signal 발생시 sequelize connection 즉시 정리 작업 진행
process.on('SIGINT', () => {
  Object.values(sequelizeDict).forEach(s => {s.close();})
    console.log("db closed");
});


module.exports = SequelizeManager;