const { Sequelize, DataTypes } = require('sequelize');
const SequelizeManager = require('./sequelize-manager');

const config = require('config');
const databaseConfig = config.get('databaseConfig');

// 고객 DB 말고, 공통 DB의 sequelizeManager 객체를 별도로 관리하여 Model 객체의 캐싱을 고려한다.
const sequelizeManagerDict = {}

async function getConnection (user_code, table_prefix) {
  // 공통 DB 는 SequelizeManager 자체를 한번 더 관리함.
  if(SequelizeManager.COMMON_DB_LIST.includes(user_code)) {
    if (!(user_code in sequelizeManagerDict)) {
      sequelizeManagerDict[user_code] = new SequelizeManager(databaseConfig, user_code);
    }
    
    return sequelizeManagerDict[user_code]
  } else {
    // 일반 고객 DB는 매번 생성함.(모든 고객 DB의 Model 까지 캐시하면 메모리가....)
    const conn = new SequelizeManager(databaseConfig, user_code, table_prefix);
    
    if (!table_prefix && !SequelizeManager.COMMON_DB_LIST.includes(this.user_code)) {
        conn.table_prefix = await getTablePrefix(user_code);
    }

    return conn;
  }
}


async function getTablePrefix(user_code) {
    if (!SequelizeManager.COMMON_DB_LIST.includes(user_code)) {
      const conn = await getConnection("woosung");
      const { year } = await conn.models.ws_user_table.findOne({
        attributes: [[conn.sequelize.fn('max', Sequelize.col('year')), 'year']],
        where: {
          user_code,
        },
      });
    
      const { type } = await conn.models.ws_user_table.findOne({
        attributes: [[conn.sequelize.fn('max', Sequelize.col('type')), 'type']],
        where: {
          user_code,
          year,
        },
      });
      return `${type}${year}`;
    }
    return null;
}


module.exports = {getConnection, getTablePrefix}