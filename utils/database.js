const { Sequelize, DataTypes } = require('sequelize');
const SequelizeManager = require('./sequelize-manager');
const config = require('config');
const databaseConfig = config.get('databaseConfig');


const getTablePrefix = async (user_code) => {
    if (!SequelizeManager.COMMON_DB_LIST.includes(user_code)) {
      const conn = new SequelizeManager(databaseConfig, "woosung");
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

  const getConnection = async (user_code, table_prefix) => {
    const conn = new SequelizeManager(databaseConfig, user_code, table_prefix);
    
    if (!table_prefix && !SequelizeManager.COMMON_DB_LIST.includes(this.user_code)) {
        conn.table_prefix = await getTablePrefix(user_code);
    }

    return conn;
}

module.exports = {getConnection, getTablePrefix}