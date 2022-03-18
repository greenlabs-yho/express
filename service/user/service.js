const config = require('config');
const databaseConfig = config.get('personalDBConfig');
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');



const getUserInfo = async() => {
  const s1 = new Sequelize(databaseConfig.Database, databaseConfig.User, databaseConfig.Password, {
      host: databaseConfig.Host,
      dialect: 'mysql'});

  const s2 = new Sequelize(databaseConfig.Database, databaseConfig.User, databaseConfig.Password, {
    host: databaseConfig.Host,
    dialect: 'mysql'});

  const t1 = await s1.transaction();
  const t2 = await s2.transaction();

  try {

    await s1.query("update topic set title = 'wow3' where id = 4", {type: QueryTypes.UPDATE, transaction: t1} );
    await s2.query("update topic set title = 'test3' where id = 5", {type: QueryTypes.UPDATE, transaction: t2} );

    await t1.commit();
    await t2.commit();
  } catch (error) {
    await t1.rollback();
    await t2.rollback();
  }

  const result = await s1.query("select title from topic where id in (4, 5)", {type: QueryTypes.SELECT})
    
  return result
}

module.exports = {getUserInfo}